<template>
  <div id="routerModular">
    <p>路由模块化</p>
    <ul>
      <li>
        router.js中就是步骤--{{this.$store.state.count}}
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '../vuex/store.js'
  export default {
    data() {
      return {

      }
    },
    store,
    methods: {

    }
  }

</script>
