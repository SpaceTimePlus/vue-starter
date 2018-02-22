<template>
  <div class="head-navbar cf">
    <div class="head-navbar_item font-size-36">
      <div class="head_nav_item head_nav_item_50">
        <router-link :to="{name: 'PananoHouse'}" v-bind:class="{on:PananoNavState==0}">实景看房</router-link>
      </div>
      <div class="head_nav_item head_nav_item_50">
        <router-link :to="{name: 'PananoInfo'}" v-bind:class="{on:PananoNavState==1}">实景动态</router-link>
      </div>
      <router-link :to="{name: 'search'}" class="search_icon top_right">
        <i class="icon icon_search "></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PananoHeader',
    data () {
      return {
        message: ''
      }
    },
    computed: {
    },
    props: {
      PananoNavState: 0
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
