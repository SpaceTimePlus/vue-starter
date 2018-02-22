<template>
  <div>
    <router-link class="w_item w_item_1 cf" v-for="item in HouseLastOnline" :to="{name: 'GardenInfo', query: { id: item.gardenId }}" tag="div">
      <div class="thumb fl">
        <img v-bind:src=item.gardenImg>
      </div>
      <div class="house-content">
        <div class="old-house-title font-tit margin_b_20">
          <span>{{item.gardenName}}</span>
        </div>
        <div class="house-info">
          <div class="price margin_b_20 font-size-30">{{item.startPrice>0?(item.startPrice+'万元起'):item.gardenPrice>0?(item.gardenPrice+'元/平米起'):'待定'}}</div>
        </div>
        <div class="name margin_b_20 font-content">{{item.gardenPosition}}</div>
        <div class="font-small ">
          <span>{{item.houseRange!=undefined?item.houseRange:''}} {{item.gardenMark!=undefined?(item.gardenMark.length>0?item.gardenMark[0]:''):''}} {{item.minHouseArea>0?(item.minHouseArea + ' - ' + item.maxHouseArea+'㎡'):''}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'HouseLastOnline',
    data () {
      return {
        message: '',
        HouseLastOnline: ''
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
        vm.getHouseLastOnlineData()
      },
      getHouseLastOnlineData () {
        let vm = this
        // 发起 dispatch 到 action
        vm.$store.dispatch('getHouseLastOnlineData', { cityId: this.cityId }).then((result) => {
          if (result) {
            vm.HouseLastOnline = result
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
