<template>
 
    <router-link :to="{ name: 'HomePage' }">Projects</router-link> 
    <br>
    <router-link :to="{ name: 'AddProject' }">Add New Project</router-link>
    <br> 
    <router-link :to="{ name: 'AddPerson' }">Add Person</router-link>
    <br>
    <router-link :to="{ name: 'Persons' }">Persons</router-link>

  <!-- <nav class="bottom-nav">
    <router-link :to="{ name: 'HomePage' }">bottom</router-link> |
    <router-link :to="{ name: 'AddProject' }">menu </router-link>
  </nav> -->
</template>

<script>
export default {};
</script>

<style>
.main-nav {
   text-align: left; 
  /* margin: 40px auto; */
  /* white-space: nowrap; */
}
.main-nav a {
  display: flex;
  text-decoration: none;
  margin: 0 0px;
  color: darkslategray;
  /* font-size: 20px; */
  /* margin-top: 20px; */
}
a.router-link-active {
  border-bottom: 3px solid indigo;
  padding-bottom: 4px;
  color: darkslateblue;
}
/* .bottom-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: darkslategray;
  font-size: 25px;
} */
</style>
