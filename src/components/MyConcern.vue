<template>
  <div>
    <template v-if="Data.length > 0">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <router-link class="w_item font-size-30" v-for="item in Data" :to="{name: 'GardenInfo', query: { id: item.gardenId }}" tag="div">
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
  export default {
    name: 'MyAnswerCompleted',
    data () {
      return {
        message: '',
        Data: '',
        searchCondition: {PageIndex: 0, PageSize: 10},
        pageList: [],
        allLoaded: false,
        scrollMode: 'auto',
        ErrMessage: '您暂时还没有旁听过楼盘哦'
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
        vm.getData()
      },
      getData () {
        let vm = this
        // 发起 dispatch 到 action
        vm.$store.dispatch('getMyConcern', {
          cityId: this.cityId,
          'PageIndex': this.searchCondition.PageIndex,
          'PageSize': this.searchCondition.PageSize
        }).then((result) => {
          if (result) {
            vm.Data = result
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
        this.searchCondition.PageIndex = parseInt(this.searchCondition.PageIndex) + 1
        let vm = this
        // 发起 dispatch 到 action
        vm.$store.dispatch('getMyConcern', {
          cityId: this.cityId,
          'PageIndex': this.searchCondition.PageIndex,
          'PageSize': this.searchCondition.PageSize
        }).then((result) => {
          if (result) {
            let haveMore = true
            if (result.length < 1 || result == null) {
              haveMore = false
            }
            vm.isHaveMore(haveMore)
            vm.Data = vm.Data.concat(result)
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
      DataNull
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
