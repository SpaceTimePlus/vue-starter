<template>
  <div>
    <router-link class="w_item font-size-30" v-for="item in houseLike" :to="{name: 'GardenInfo', query: { id: item.gardenId }}" tag="div">
      <div class="w_item_thumb" :style="'background-image: url('+item.gardenImg+')'">
        <i class="icon icon_panano"></i>
      </div>
      <div class="info name cf">{{item.gardenName}}
        <div class="price fr">{{item.startPrice>0?item.startPrice+'万元起':(item.gardenPrice>0?'¥'+item.gardenPrice+'/㎡':'待定')}}</div>
      </div>
      <div class="address font-size-28">{{item.gardenAddress}}</div>
      <div class="marks font-size-24">{{item.houseRange!=undefined?item.houseRange:''}} {{item.gardenMark!=undefined?(item.gardenMark.length>0?item.gardenMark[0]:''):''}} {{item.minHouseArea>0?(item.minHouseArea + ' - ' + item.maxHouseArea+'㎡'):''}}</div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HouseLike',
  data () {
    return {
      message: '',
      houseLike: '',
      pageIndex: 0,
      pageSize: 3
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
      vm.$store.dispatch('getHouseLikeData', { cityId: this.cityId, pageIndex: this.pageIndex, pageSize: this.pageSize }).then((result) => {
        if (result) {
          vm.houseLike = result
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
