<template>
    <div class="main-nav">
       <i class="fa-brands fa-servicestack" style="color: #72e3fc;"></i> 
        <p class="task">Task Tracker </p>  
        <div style="width: 1060px;"></div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .main-nav {
    position: absolute;
      left: 0;
      top: 0%;
      color: rgb(0, 255, 157);
      padding: 30px;
      text-align: center;
      /* margin: 40px auto;
      margin-bottom: 0px; */
      width: 100%;
      background-color: #6780c0;
      border-top: 1px solid grey;
      font-weight: 500;
      border-bottom: 3px solid #ccc;
  }

  .fa-servicestack:before {
    content: "\f3ec";
    position: absolute;
    left: 0;
    top: 0;
    margin: 30px;
}
   
.bell{
    align-items: flex-end;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.three{
    align-items: flex-end;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.task{
  position: absolute; 
  width: auto; 
  height: auto; 
  margin: 30px; 
  top: inherit;
  color: black;
}



  </style>