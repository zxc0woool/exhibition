<template id="blog">
  <div class="">
    <button type="primary">blog</button>
 
  </div>
</template>

<script>
import Vue from "vue/dist/vue.common.js"
Vue.component('blog',{

    template: '#blog'
  })
  
// export default {
//   name: 'Blog',
//   data() {
//     return {
//       inpContent: 'Blog',
//       name:'123'
//     }
//   },
//   methods: {
//     // getArticle() {
//     //   this.$http.get('/api/getArticle')
//     //     .then( (res) => {
//     //       console.log('res', res);
//     //       this.inpContent = res.data.data;
//     //     })
//     // }
//   }
// }
</script>