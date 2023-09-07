<template>
    <div>
    <div v-if="persons.length">
      <div class="persons" v-for="person in persons" :key="person.id">
        <div class="icons">
         <router-link
          :to="{ name: 'EditPersons', params: { id: person.id } }" >
          <span :class="persons.owner ? 'material-icons owner' : 'material-icons'">edit</span>
        </router-link>
        <span @click="personsDelete(person.id)" class="material-icons">delete</span>
      </div>

       {{ person.name }}
       {{ person.surname }}
       <br>
      E-mail:  {{ person.email }}
       <br>
      Telefon:  {{ person.phone }}
      
       
      </div>
    </div>
    <div v-else>
        Kişi Listesi boş....
        Yeni Ekle butonu yap.
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showDetails: false,
        urlThis: "http://localhost:3000/persons",
        persons: []
      };
    },
    mounted() {
    fetch(this.urlThis)
      .then((res) => res.json())
      .then((data) => (this.persons = data))
      .catch((err) => console.log(err.message));
  },
    methods: {
      showDetail() {
        this.showDetails = !this.showDetails;
      },
      deleteMethod(id) {
      this.persons = this.persons.filter((persons) => persons.id !== id);
    },
      personsDelete(id) {
        var deletedUrl =  "http://localhost:3000/persons/" + id;

        fetch(deletedUrl, { method: "DELETE" }).then(() =>
            this.deleteMethod(id)
        );
      },
      personsComplete() {
        fetch(this.urlThis, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ complete: !this.persons.complete }),
        })
          .then(() => this.$emit("complete", this.persons.id))
          .catch((err) => console.log(err.name));
      },
    },
  };
  </script>
  
  <style>
.persons{
margin: 5px; 
border: solid 1px rgb(127, 192, 30); 
padding: 5px;
}

  .persons {
    margin: 20px auto;
    background-color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 10px solid greenyellow;
  }
  h3 {
    cursor: pointer;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 25px;
    margin-left: 10px;
    font-weight: bold;
    cursor: pointer;
    color: #bbb;
  }
  .material-icons:hover {
    color: #777;
  }
  .persons.complete {
    border-left: 10px solid green;
  }
  .persons.complete .tick {
    color: green;
  }
  
  .owner {
    color: #c90808;
  }
  </style>
  