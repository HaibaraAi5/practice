<template>
  <div id="echart" style="width: 600px;height:400px;">
  </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        label: {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          }
        }

      }
    },
    methods: {

    },
    mounted() {
      /*在绘图前我们需要为 ECharts 准备一个具备高宽的 DOM 容器。
        然后就可以通过 echarts.init 方法初始化一个 echarts实例
        通过setOption 方法生成一个简单的柱状图*/
      echarts.init(document.getElementById('echart')).setOption({
        backgroundColor: '#2c343c',
        series: {
          type: 'pie',
          data: [{
            name: 'A',
            value: 1212
          }, {
            name: 'B',
            value: 2323
          }, {
            name: 'C',
            value: 1919
          }]
        }
      });

    }
  }

</script>
