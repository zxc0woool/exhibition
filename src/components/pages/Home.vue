<template>
  <div class="blog-body">
    <div class="up">
        <span class="prominent-topic">作品</span>
        <div class="head on">相册1</div>
        <div class="head">相册2</div>
        <div class="head">相册3</div>
    </div>
    <div class="content">

      <!-- <span class="img">
        <img src="../../assets/img/636a789e45549049107cbd08dac2d658.jpg" />
        <p title="636a789e45549049107cbd08dac2d658">636a789e45549049107cbd08dac2d658</p>
      </span> -->
      <!-- <span v-for="val in datalist" class="img">
        <img @error="setErrorImg($event,val.img)" :src="val.img" />
        <p :title="val.name">{{val.name}}</p>
      </span> -->
      
    </div>

  </div>
</template>
<script>
export default {
  name: "Blog",
  data() {
    return {
      inpContent: "blog",
      name: "123"
    };
  },
  props: {
    datalist: Array,
    data: {}
  }
  ,
//   methods: {
//     setErrorImg (e,img) {
// debugger
// require(img)
//       errorImg(e,img)
//     }
//   }
};
</script>
<style>
.blog-body {
  width: 98%;
}

.blog-body .up {
  /* background-color: bisque; */
  width: 100%;
  height: 40px;
  padding-top: 0px;
  margin: 10px 0;
  line-height: 38px;
}
.blog-body .up .head {
  float: left;
  cursor: pointer;
  margin: 0 5px;
  height: 60%;
  line-height: 24px;
  /* border-bottom: 2px solid #33afd8; */
}
.blog-body .up .head:hover {
  color: #00a1d6;
}

.blog-body .up .head.on {
  color: #00a1d6;
  border-top: 1px solid #33afd8;
  border-bottom: 2px solid #33afd8;
}
.blog-body .up .head.on::before {
  content: "";
  position: relative;
  left: 50%;
  margin-left: -3px;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 3px dashed transparent;
  border-top: 4px solid #33afd8;
  border-left: 3px dashed transparent;
  border-right: 3px dashed transparent;
}

.blog-body .content {
  /* background-color: bisque; */
  min-height: 100px;
  width: 100%;
}
.blog-body .content .img {
  width: 175px;
  float: left;
  margin: 0 20px 20px 0;
}
.blog-body .content .img img {
  height: 100px;
  border-radius: 4px;
}
.blog-body .content .img p {
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}
</style>