<template>
  <div class="head-navbar">
    <div class="middle_menu font-size-36">
      <div class="menu">
        <router-link :to="{name: 'home'}">
          <img src="../assets/img/icon_home.png" alt="" class="weui-tabbar__icon">
        </router-link>
      </div>
      <div class="menu" :class="{on:HeaderState==0}">
        <router-link :to="{name: 'GardenInfo', query: { id: gardenId }}">
          <span>详情</span>
        </router-link>
      </div>
      <div class="menu" :class="{on:HeaderState==1}">
        <router-link :to="{name: 'GardenProblem', query: { id: gardenId }}">
          <span>问答</span>
        </router-link>
      </div>
      <div class="menu" :class="{on:HeaderState==2}">
        <router-link :to="{name: 'GardenDynamic', query: { id: gardenId }}">
          <span>动态</span>
        </router-link>
      </div>
      <div class="menu"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GardenHeader',
    data () {
      return {
        message: '',
        gardenId: 0
      }
    },
    computed: {
    },
    props: {
      HeaderState: 0,
      gardenId: 0
    },
    mounted () {
    },
    methods: {
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // 进入页面前钩子
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
