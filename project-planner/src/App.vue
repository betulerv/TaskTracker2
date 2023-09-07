<template>
  <div>
    <div>
      <SideBar />
    </div>

    <nav>
      <TopMenu />
    </nav>
    <router-view />
    <BottomBar></BottomBar>
    
  </div>
</template>

<script>
import BottomBar from "./components/BottomBar.vue";
import SideBar from "./components/SideBar.vue";
import TopMenu from "./components/TopMenu.vue";
export default {
  components: {BottomBar, SideBar, TopMenu},
};
</script>

<style>
body {
  background-color: beige;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: darkblue;
}
nav {
  padding-top: 110px;
  font-size: 25px;
}

nav a {
  font-weight: bold;
}
</style>
