<template>
  <div class="data_null">
    <div class="n-e_item">
      <img src="../assets/img/icon_nodata_empty.png" class="item_img">
      <div class="font-content">{{ErrMessage}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataNull',
  data () {
    return {
      message: '',
      code: ''
    }
  },
  props: {
    ErrMessage: ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
