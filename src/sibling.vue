<template>
  <div id="sibling">
  </div>
</template>

<script>
  // 非父子组件传值
  /*
  1.新建一个js文件，实例化vue并暴露实例
  2.在要广播的地方引入实例
  3.通过  VueEvent.$emit('名称','数据')
  4.在接受广播数据的地方用VueEvent.$on('名称',function(){

  })
  */
  import VueEvent from './model/VueEvent.js'
  export default {
    data() {
      return {
        siblingMsg: ' 我是sibling'
      }
    },
    //监听children的数据
    mounted() {
      VueEvent.$on('to-sibling', function (data) {
        console.log(data);
      })
    },
  }

</script>

<style>
#sibling{
  background: rebeccapurple;
}

</style>
