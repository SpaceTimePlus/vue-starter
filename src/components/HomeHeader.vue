<template>
  <div class="head-navbar">
    <div class="head-navbar_item font-size-30 cf">
      <div class="city home_city fl">
        <router-link :to="{name: 'CitySel'}">
          <span class="p_one home_span">长沙</span><i class="icon icon_sel_down"></i>
        </router-link>
      </div>
      <div class="home_search middle-title">
        <router-link :to="{name: 'search'}" class="p_one">
          <i class="icon icon_search "></i>楼盘、人名、问答等
        </router-link>
      </div>
      <div class="home_map fr">
        <router-link :to="{name: 'HomeMap'}">
          <i class="icon icon_location_home"></i><span>地图</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader',
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
</style>
