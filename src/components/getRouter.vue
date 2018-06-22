<template>
  <div id="getRouter">
    <ul>
      <li v-for="(item,key) in getRouter">
        <router-link :to="'/getContent?id='+key">{{key}}--{{item}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        getRouter: ['get111', 'get222', 'get333']
      }
    },
  }

</script>

<style>


</style>
