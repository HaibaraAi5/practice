<template>
  <div id="child">
    <button @click="getSibing()">给sibling组件广播数据</button>
  </div>
</template>

<script>
  //引入vue实例
  import VueEvent from './model/VueEvent.js'
  export default {
    data() {
      return {
        message: '子组件的message'
      }
    },
    methods: {
      runChildren() {
        alert('我是子组件的方法')
      },
      getSibing() {
        //广播数据
        VueEvent.$emit('to-sibling', this.message)
      }
    }
  }
  //父组件主动获取子组件的数据和方法：
  /*
  1.调用子组件的时候定义一个ref
  <v-child ref="child"></el-chidren>
  2.在父组件里面通过
  this.$refs.children.属性
  this.$refs.children.方法
   */
  //子组件主动获取父组件的数据和方法
  /*this.$parent.数据
  this.$parent.方法
  */

</script>


<style>
  #child{
    background: red;
  }
</style>
