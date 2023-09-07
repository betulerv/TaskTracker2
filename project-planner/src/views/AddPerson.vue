<template>
  <form @submit.prevent="personSubmit">
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
   
      <button>Add Person</button>
    
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      phone: ""
    };
  },
  methods: {
    personSubmit() {
      let newPerson = {
        name: this.name,
      surname: this.surname,
      email: this.email,
      phone: this.phone
      };
      fetch("http://localhost:3000/persons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPerson),
      })
        .then(() => this.$router.push("/homePage"))
        .catch((err) => console.log(err.name));
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
