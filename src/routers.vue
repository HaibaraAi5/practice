<template>
  <div id="router">
    <button @click="getRouter()">点击按钮展示vue-router路由的使用及其配置</button>
    <div v-show="yRouter" class="routerClass">
      <p>
        路由：可以动态的使根组件自动挂载其他组件
        <ul>
          <li>
            1.安装
            <pre>npm install vue-router --save</pre>
          </li>
          <li>
            2.引入并
            <pre>Vue.use(VueRouter) (main.js)</pre>
            <pre>import VueRouter from 'vue-router' Vue.use(VueRouter)</pre>
          </li>
          <li>
            3.配置路由
            <ul>
              <li>
                (1).创建组件 引入路由
              </li>
              <!-- 默认跳转路由  -->
              <li>
                (2).定义路由(建议复制)
                <pre>const routes = [ { path: '/foo', component: Foo }, { path: '/bar', component: Bar }]</pre>
              </li>
              <!-- （缩写）相当于 routes: routes -->
              <li>
                (3).实例化VueRouter
                <pre>const router = new VueRouter({ routes})</pre>
              </li>
              <li>
                (4)挂载
                <pre>new Vue({ el: '#app', router， render: h => h(App) })</pre>
              </li>
              <li>
                (5)根组件的模板里面放上(router-viewbiao)标签
              </li>
            </ul>
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        yRouter: false

      }
    },
    methods: {
      getRouter() {
        this.yRouter = true
      }
    }
  }

</script>

<style scoped>
 #router{
   background: greenyellow;
 }
  .routerClass {
    color: rebeccapurple;
    background: burlywood;
  }

</style>
