<template>
  <div id="elementUi">
    <p>1.找官网
    </p>
    <p>
      2.安装 cnpm install element-ui --save
    </p>
    <p>
      3.引入element-ui的css和插件
      <ul>
        <li> import ElmentUi from 'element-ui';</li>
        <li> Vue.use(ElmentUi);</li>
        <li>
          import 'mint-ui/lib/theme-chalk/index.css';
        </li>
        <li> 4.如果package.json里有file_loader,直接在webpack.config.js中y引入{ test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader'
          }
        </li>
        <li>没有的话先安装file_loader</li>
      </ul>
    </p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }

</script>
