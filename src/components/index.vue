<template>
  <div id="index">
    <div class="body-img">
        <!-- <div class="left">

        </div>
         <div class="middle-img">

        </div>
        
         <div class="right">

        </div> -->

        <img class="middle-img" src="../assets/img/1000.png">
    </div>
    <div class="body">
      <div class="left">
          <header/>
        <router-view></router-view>
        <footer/>

      </div>
      <div class="right">
       
        <blog></blog>
      </div>

    </div>
  </div>

</template>

<script>
import "./index.css";

import axios from "axios";

export default {
  name: "index",
  data() {
    return {
      msg: "index",
      dialogues: [],
      fold: false
    };
  },
  created() {
    axios
      .get("static/data.json")
      .then(response => (this.dialogues = response.data.img));
  },
  methods: {
    add: function() {
      this.msg = this.msg + " OP";
      this.fold = !this.fold;
    }
  }
};
</script>
<style>
.body-img {
  position: relative;
  z-index: 199;
  height: 230px;
  margin-top: -40px;
  background: #eee;
  background-position: center -10px;
  background-repeat: no-repeat;
  text-align: center;
  line-height: 25;
  overflow: hidden;
  background-color: hsla(0, 100%, 100%, 0.4);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
/* .body-img .left{
  background-color: rgb(127, 251, 255);
      float: left;
      height: 100%;
} */
.body-img .middle-img {
  max-height: 100%;
  width: 1920px;
  position: relative;
  z-index: 199;
  /* height: 170px; */
  /* margin-top: -42px; */
  background: #eee;
  background-position: center -10px;
  background-repeat: no-repeat;
}
/* .body-img .right{
   background-color: rgb(182, 127, 255);
       float: left;
       height: 100%;
} */

.body {
  background-color: rgb(255, 241, 196);
  margin: 0 auto;
  min-height: 490px;
  width: 1280px;
}
.body .left {
  background-color: rgb(223, 255, 196);
  float: left;
  min-height: 490px;
  width: 1000px;
}
.body .right {
  background-color: rgb(245, 196, 255);
  float: left;
  min-height: 490px;
  width: 280px;
}

</style>
