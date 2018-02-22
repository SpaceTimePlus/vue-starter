<template>
  <div class="head-navbar">
    <div class="head-navbar_item font-size-30 cf">
      <div class="city home_city fl">
        <router-link :to="{name: 'CitySel'}">
          <i class="icon icon_location_problem"></i><span class="p_one home_span">长沙</span>
        </router-link>
      </div>
      <div class="middle-title font-size-36" >听专家</div>
      <div class="home_map search fr">
        <router-link :to="{name: 'search'}">
          <i class="icon icon_search"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProblemHeader',
  data () {
    return {
      message: '',
      code: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search{ padding-left:1em}
</style>
