<template>
  <div id="MintUi">
    <p>1.找官网
    </p>
    <p>
      2.安装 cnpm install mint-ui --save
    </p>
    <p>
      3.引入mint Ui的css和插件
      <ul>
        <li> import Mint from 'mint-ui';</li>
        <li> Vue.use(Mint);</li>
        <li>
          import 'mint-ui/lib/style.css';
        </li>
        <li> 4.看文档直接使用</li>
      </ul>
    </p>
    <p>5.在mintUi组件上面执行事件的时候@click.native</p>
    <hr>
    <mt-button type="primary">primary</mt-button>
    <br>
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      ...
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
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
