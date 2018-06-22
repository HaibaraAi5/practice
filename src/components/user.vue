<template>
  <div id="user">
    <div class="user">
      <div class="left">
        <ul>
          <li>
            <router-link to="/user/userAdd">增加用户</router-link>
          </li>
          <li>
            <router-link to="/user/userMsg">用户列表</router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  //路由的嵌套
  /*1.配置路由
  2.父路由里面配置子路由*/
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }

</script>

<style scoped>
  /* 左侧固定高度，右侧自适应 */

  .user {
    display: flex;
  }

  .left {
    width: 400px;
    min-height: 100px;
    border-right: 1px solid #eee;
  }

  .right {
    flex: 1
  }

  .left li {
    flex: 1
  }

</style>
