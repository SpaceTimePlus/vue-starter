<template>
  <div >
    <template v-if="data">
      <div class="top-head-content p-30 font-small m_b_20">共找到{{data.itemCount}}个楼盘</div>
      <!--楼盘列表-->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <router-link class="w_item font-size-30" v-for="item in data" :to="{name: 'GardenInfo', query: { id: item.gardenId }}" tag="div">
          <div class="w_item_thumb" :style="'background-image: url('+item.gardenImg+')'">
            <i class="icon icon_panano"></i>
          </div>
          <div class="info name cf">{{item.gardenName}}
            <div class="price fr">{{item.startPrice>0?item.startPrice+'万元起':(item.gardenPrice>0?'¥'+item.gardenPrice+'/㎡':'待定')}}</div>
          </div>
          <div class="address font-size-28">{{item.gardenAddress}}</div>
          <div class="marks font-size-24">{{item.houseRange!=undefined?item.houseRange:''}} {{item.gardenMark!=undefined?(item.gardenMark.length>0?item.gardenMark[0]:''):''}} {{item.minHouseArea>0?(item.minHouseArea + ' - ' + item.maxHouseArea+'㎡'):''}}</div>
        </router-link>
      </mt-loadmore>
    </template>
    <template v-else>
      <DataNull :ErrMessage="ErrMessage"></DataNull>
    </template>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import DataNull from '../components/DataNull'
  import footerNav from './footerNav'
  export default{
    name: 'searchResultGarden',

    data: function () {
      return {
        message: '',
        data: '',
        PageSize: 10,
        PageIndex: 0,
        allLoaded: false,
        scrollMode: 'auto',
        ErrMessage: '找不到相关楼盘哦'
      }
    },
    props: {
      searchKey: ''
    },
    computed: {
      ...mapGetters(['cityId'])
    },
    watch: {
      searchKey (val) {
        this.init()
      }
    },
    mounted () {
      // 初始化
      // this.init()
    },
    methods: {
      init () {
        let vm = this
        vm.getData()
      },
      getData () {
        let vm = this
        vm.$store.dispatch('getSearchResultGarden', {
          'key': this.searchKey,
          'cityId': this.cityId,
          'PageSize': this.PageSize,
          'PageIndex': this.PageIndex
        }).then((result) => {
          if (result) {
            vm.data = result
            // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
            let haveMore = true
            if (result.length < 1 || result == null) {
              haveMore = false
            }
            this.isHaveMore(haveMore)
            this.$nextTick(function () {
              this.scrollMode = 'touch'
            })
          }
        })
      },
      loadTop () {
        // 下拉刷新
        this.getData()
        this.$refs.loadmore.onTopLoaded()
      },
      loadBottom () {
        // 上拉加载更多
        this.more()
        this.$refs.loadmore.onBottomLoaded()
      },
      more () {
        // 分页查询
        this.PageIndex = parseInt(this.PageIndex) + 1
        let vm = this
        // 发起 dispatch 到 action
        vm.$store.dispatch('getSearchResultGarden', {
          'key': this.key,
          'cityId': this.cityId,
          'PageSize': this.PageSize,
          'PageIndex': this.PageIndex
        }).then((result) => {
          if (result) {
            let haveMore = true
            if (result < 1 || result == null) {
              haveMore = false
            }
            vm.isHaveMore(haveMore)
            vm.data = vm.data.concat(result)
          }
        })
      },
      isHaveMore (isHaveMore) {
        // 是否还有下一页，如果没有就禁止上拉刷新
        this.allLoaded = true
        if (isHaveMore) {
          this.allLoaded = false
        }
      }
    },
    components: {
      DataNull,
      footerNav
    }
  }
</script>
<style lang="scss">
</style>
