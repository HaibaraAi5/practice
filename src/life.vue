<template>
  <div id="life">
    生命周期函数----{{msg}}
    <br>
    <button @click="setMsg()">改变msg</button>
    <v-home :title="title" :run="run" :home="this"></v-home>
  </div>
</template>

<script>
  import home from './home.vue'
  export default {
    name: 'life',
    data() {
      return {
        msg: "msg",
        title: '嘛嘛嘛'
      }

    },
    methods: {
      setMsg() {
        this.msg = '我是改变后的数据'
      },
      //方法不加()，因为()表示执行方法
      run() {
        alert('我是life的方法')
      }

    },
    beforeCreate() {
      console.log('实例创建之前')
    },
    created() {
      console.log('实例创建完成');
    },
    beforeMount() {
      console.log('模板编译之前');
    },
    mounted() { //请求数据，操作DOM
      console.log('模板编译完成');
    },
    beforeUpdate() {
      console.log('数据更新之前');
    },
    updated() {
      console.log("数据更新完成");
    },
    beforeDestroy() {
      console.log("实例销毁之前");
    },
    destroyed() {
      console.log("实例销毁完成");
    },
    components: {
      'v-home': home
    }
  }

</script>

<style>


</style>
