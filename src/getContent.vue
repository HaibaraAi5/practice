<template>
  <div id="getContent">
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted(){
      //获取get传值
      console.log(this.$route.query)
    }
  }

</script>

<style>


</style>

