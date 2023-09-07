<template>
    <div class="main-nav">
        <br style="margin-top: auto;">
        <div class="left-menu">
            <p class="yönetici">YÖNETİCİ</p>
            <img class="profile-img" src="../images/profile-circle-fill.svg">
            <p class="isim">Kürşat Çiftçibaşı</p>
            <div class="çizgi"></div>
            <Navbar />

        </div>
    </div>
  </template>
  
  <script>
  import Navbar from "./Navbar.vue";

export default {
  components: { Navbar},
}; 
 </script>
  
  <style scoped>
  .main-nav {
    position: absolute;
      left: 0;
      top: 0;
      padding: 13px;
      text-align: center;
      width: 150px;
      min-height: 100vh;
      background-color: #899dd2;
      border-top: 1px solid grey;
      font-weight: 500;
      transform-origin: left bottom; 
      white-space: nowrap; 
      border-bottom: 3px solid #ccc;
  }

.top-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 3px solid #ccc;
    background-color: #6780c0;
}

.top-menu.bell.three{
    margin-left: auto;
}

.menu-list {
    list-style: none;
    padding: 0;
}

.menu-list li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: black;
}

.menu-list li i {
    margin-right: 10px;
}

.profile-img {
    display: flex;
    width: 90px;
    height: 90px;
    align-items: center;
}

.yönetici {
    display: flex;
    align-items: center;
    font-family: ui-monospace;
}

.isim {
    display: flex;
    white-space: nowrap; 
    color: black;
}

.çizgi{
    border: solid 1px #6780c0;
}

.left-menu{
    margin-top: 80px;
}
  
  </style>