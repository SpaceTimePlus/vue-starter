<template>

  <div>
    <div class="page__bd w_item font-size-30" v-for="item in PananoInfoData" @click="goUrl(item.panoramaUrl)">
      <div class="w_item_thumb" @click="goUrl(item)" :style="'display:block;background-image: url('+item.panoramaThumbUrl+')'"></div>
      <div class="panano-see"><i class="icon icon_see_img"></i><span class="font-size-24">{{item.pageViewCount}}</span></div>
      <div class="info">{{item.fullTitle}}<div class="panano-date-info font-size-24">{{item.isNewHouseTime}}</div></div>
      <div class="address">{{item.descriptions}}</div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PananoInfoData',
  data () {
    return {
      message: '',
      PananoInfoData: ''
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
      vm.getPananoInfoData()
    },
    getPananoInfoData () {
      let vm = this
      // 发起 dispatch 到 action
      vm.$store.dispatch('getPananoInfoData', { cityId: this.cityId }).then((result) => {
        if (result) {
          vm.PananoInfoData = result
        }
      })
    },
    goUrl (obj) {
      window.location.href = obj
    }
  }
}
</script>
