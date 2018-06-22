<template>
  <div id="home">
    <h2>我是头部组建--{{title}}</h2>
    <button @click="run()">执行lif(父组件)的方法</button>
    <button @click="getLife()">执行lif(父组件)的数据和方法</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      getLife() {
        alert(this.title)
      }
    },
    //父组件给子组件传值 props
    /*
    1.父组件调用子组件的时候调用动态属性
    2.在子组件中通过props接收父组件
    父组件给子组件传值的时候，既能够穿属性，方法，还能整体传
    */
  // 下面无验证
    props: ['title', 'run', 'home'],
    //验证父组件传来数据的合法性
    // props:{
    //   'title':String,
    // }
  }
</script>

<style>
  #home{
    background: blue;
  }
</style>
