<template>
    <form @submit.prevent="editPersonSubmit">
      <label>Name:</label>
    <br />
    <input type="text" v-model="name" required />
    <br />
    <label>Surname:</label>
    <br />
    <input type="text" v-model="surname" required />
    <br />
    <label>Email:</label>
    <br />
    <input type="text" v-model="email" required />
    <br />
    <label>Phone:</label>
    <br />
    <input type="text" v-model="phone" required />
    <br />
   
      <button>Update Person</button>
    </form>
  </template>
  
  <script>
  export default {
    props: ["id"],
    data() {
      return {
        name: "",
        surname: "",
        uri: "http://localhost:3000/persons/" + this.id,
        email:"",
        phone:""
      };
    },
    mounted() {
      fetch(this.uri)
        .then((res) => res.json())
        .then((data) => {
          (this.name = data.name), (this.surname = data.surname), (this.email = data.email), (this.phone = data.phone);
        });
    },
    methods: {
      editPersonSubmit() {
        fetch(this.uri, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: this.name, surname: this.surname, email: this.email, phone: this.phone }),
        })
          .then(() => this.$router.push("/Persons"))
          .catch((err) => console.log(err.message));
      },
  
    showDetail() {
      this.showDetails = !this.showDetails;
    },
    personsDelete() {
      fetch(this.urlThis, { method: "DELETE" }).then(() =>
        this.$emit("delete", this.persons.id)
      );
    },
  },
  };

  </script>  

<style>
form {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  padding: 10px;
  border: 2px solid #ddd;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
}
form button {
  display: block;
  margin: 20px auto 0;
  background-color: green;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
}
</style>
