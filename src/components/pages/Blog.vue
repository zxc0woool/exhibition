<template id="blog">
  <div class="">
    <button type="primary">{{ inpContent }}</button>
 
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      inpContent: 'Blog',
      name:'123'
    }
  },
  // props:{
  //       datalist:Array,
  //       data:{},
  // },
  methods: {
    // getArticle() {
    //   this.$http.get('/api/getArticle')
    //     .then( (res) => {
    //       console.log('res', res);
    //       this.inpContent = res.data.data;
    //     })
    // }
  }
}
</script>