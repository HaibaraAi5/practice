<template>
  <div id="app">
    <button @click="run1">执行事件的方式</button>
    <br>
    <button @click="getMsg">获取data里面的数据</button>
    <br> {{msg}}
    <button @click="setMsg">我是改变后的数据</button>
    <br>
    <button @click="setMsgData">请求数据</button>
    <ul>
      <!-- (item,key)item表示内容，可以一般表示索引值，也就是顺序 -->
      <li v-for="(item,key) in list">{{key}}---{{item}}</li>
    </ul>
    <br>
    <button @click="deleteData('111')">执行方法传值</button>
    <br>
    <!-- 自定义属性的值 比如data-aid-->
    <button @click="eventData($event)" data-aid='123'>事件对象</button>
    <br>
    <!-- todoList 实例-->
    <input type="text" v-model="todo" @keydown='doAtt($event)'>
    <!-- <button @click="doAtt()">+增加</button> -->
    <hr>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item1,key) in list1" v-if='!item1.checked'>
        <input type="checkbox" v-model="item1.checked" @change="saveStatus()">{{item1.title}}--
        <button @click='deleteLi(key)'>删除</button>
      </li>
    </ul>
    <br>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item1,key) in list1" v-if='item1.checked'>
        <input type="checkbox" v-model="item1.checked" @change="saveStatus()">{{item1.title}}--
        <button @click='deleteLi(key)'>删除</button>
      </li>
    </ul>
    <!-- lif.vue为注册的组件 -->
    <br>
    <!-- <v-lif v-if="flg"></v-lif> -->
    <br>
    <button @click="flg=!flg">挂在以及写在lif组件</button>
    <br>
    <button @click="getData()">请求数据</button>
    <br>
    <hr>
    <ul>
      <li v-for="item in list2">{{item.title}}</li>
    </ul>
    <!-- <v-child ref="children"></v-child> -->
    <button @click="getChildren()">主动获取子组件的属性和方法</button>
    <!-- <v-sibling></v-sibling> -->
    <hr>
    <br>
    <router-link to="./routers">routers组件</router-link>
    <br>
    <router-link to="./child">child组件</router-link>
    <br>
    <router-link to="./sibling">sibling组件</router-link>
    <br>
    <router-link to="./lif">lif组件</router-link>
    <br>
    <router-link to="./home">home组件</router-link>
    <br>
    <router-link to="./getRouter">vue动态传值</router-link>
    <br>
    <router-link to="./getRouter">get传值</router-link>
    <br>
    <router-link to="./routerData">路由请求数据</router-link>
    <br>
    <hr>
    <button @click="go()">通过JavaScript跳转页</button>
    <router-link to="./user">路由嵌套</router-link>
    <br>
    <router-link to="./elementUi">pc端的UI框架</router-link>
    <br>
    <router-link to="./MintUi">移动端的UI框架</router-link>
    <br>
    <router-link to="./actionSheet">actionSheet</router-link>
    <br>
    <router-link to="./whoUse">谁用</router-link>
    <br>
    <router-link to="./infiniteScroll">上拉分页加载</router-link>
    <router-link to="./routerModular">路由的模块化</router-link>
    <hr>
    <router-link to="./vuex">vuex的作用</router-link>
    <br>
    <hr>
    <!-- <v-routers></v-routers> -->
    <router-view class="appClass"></router-view>
  </div>
</template>

<script>
  // vue组件
  //vue-resource   官方提供的vue请求数据的一个插件  安装时加save，save表示把它写入到package.json里面,2.引入到main.js中，然后官方配置
  //axios第三方请求数据的插件的使用
  /*1.安装cnpm install axios --save
    2.哪里用哪里引入axios
    */
  //fetch-jsonp数据请求自己看看，和axios一样
  // 以下都属于在app.vue中手动挂载
  /*
  import storage from './model/storage.js'
  import lif from './lif.vue'
  import Axios from 'axios'
  import childfrom './child.vue'
  import sibling from './sibling.vue'
  import routers from './routers.vue'
  */
  import storage from './model/storage.js'
  import Axios from 'axios'
  // console.log(storage)
  export default {
    name: 'app',
    data() {
      return {
        flg: true,
        msg: 'Welcome to Your Vue',
        list: [],
        todo: "",
        list1: [{
          title: '111',
          checked: true
        }, {
          title: '222',
          checked: false
        }],
        list2: []
      }
    },
    methods: {
      run1() {
        alert('我的实战')
      },
      getMsg() {
        alert(this.msg)
      },
      setMsg() {
        this.msg = '我是改变后的户数'
      },
      setMsgData() {
        for (var i = 0; i < 10; i++)
          this.list.push('我是第' + i + '条数据')
      },
      deleteData(val) {
        alert(val)
      },
      eventData(e) {
        console.log(e);
        //获取自定义属性值
        console.log(e.srcElement.dataset.aid)
        e.srcElement.style.background = 'red'
      },
      doAtt(e) {
        //1获取文本框输入的值  2把文本框的值push到li里面即可
        console.log(e.keyCode)
        if (e.keyCode == 13) {
          this.list1.push({
            title: this.todo,
            cheked: false
          })
        }
        this.todo = ''
        //缓存功能   多次调用，所以可以封装为一个组件
        localStorage.setItem('list2', JSON.stringify(this.list1))

      },
      deleteLi(e) {
        this.list1.splice(e, 1)
        storage.set('list2', this.list1)

      },
      saveStatus() {
        storage.set('list2', this.list1)
      },
      getData() {
        //请求数据
        // 第一种方法
        // var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
        // this.$http.get(api).then(response => {
        //   console.log(response)
        //   this.list2=response.body.result
        // }, response => {

        // });
        // 第二种方法
        var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
        Axios.get(api).then(data => {
          console.log(data)
          this.list2 = data.data.result

        }).catch(data => {
          console.log(error)
        })
      },
      getChildren() {
        alert(this.$refs.children.message);
        console.log(this.$refs.children.runChildren())
      },
      go() {
        //注意：官方文档写错了
        this.$router.push({
          path: 'lif'
        })
        // this.$router.push({path:'/routerData/499'})
      }

    },

    mounted() {
      //生命周期函数(钩子函数)：组件挂载以及组件更新组件销毁的时候触发的一系列函数
      var list2 = storage.get('list2')
      if (list2) {
        this.list1 = list2
      }
      //刷新加载数据
      // this.getData();
    },
    // components: {
    //   'v-lif': lif,
    //   'v-child': child,
    //   'v-sibling': sibling,
    //   'v-routers': routers
    // },
  }

</script>

<style scoped>
.appClass{
  width:800px;
  height: 100px;
  border-radius: 20px;
}

</style>
