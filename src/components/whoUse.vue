<template>
  <div id="whoUse">
    我是用户
    <v-actionSheet></v-actionSheet>
  </div>
</template>

<script>
  import ActionSheet from './actionSheet.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      'v-actionSheet': ActionSheet
    },
    methods: {

    }
  }

</script>
