<template>
  <div class="page-swipe">
    <mt-swipe :auto="4000" prevent="true">
      <mt-swipe-item v-for="item in banner" :style="'background-image: url('+item.imgUrl+')'" @click.native="goUrl(item.goUrl)">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'banner',
  data () {
    return {
      message: '',
      banner: ''
    }
  },
  computed: {
    ...mapGetters(['cityId'])
  },
  mounted () {
    // 初始化
    this.init()
  },
  methods: {
    init () {
      let vm = this
      vm.getBannerData()
    },
    getBannerData () {
      let vm = this
      // 发起 dispatch 到 action
      vm.$store.dispatch('getBannerData', { cityId: this.cityId }).then((result) => {
        if (result) {
          vm.banner = result
        }
      })
    },
    goUrl (url) {
      window.location.href = url
    }
  }
}
</script>
