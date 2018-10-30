<template>
  <div id="app">
      <div class="nav-menu">
         <!-- <div class="nav-mask">
            
         </div> -->
      </div>
    <router-view/>
  </div>
</template>

<script>
import "./app.css";
export default {
  name: "App"
};
</script>

<style>
.nav-menu {
  position: relative;
  z-index: 200;
  height: 40px;
  color: #222;
}
.nav-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0,0%,100%,.4);
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
}

</style>
