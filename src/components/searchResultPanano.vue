<template>
  <div >
    <template v-if="data">
      <div class="top-head-content p-30 font-small m_b_20">共找到{{data.itemCount}}个实景</div>
      <!--实景列表-->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <div class="page__bd w_item font-size-30" v-for="item in data" @click="goUrl(item.panoramaUrl)">
          <div class="w_item_thumb" @click="goUrl(item)" :style="'display:block;background-image: url('+item.panoramaThumbUrl+')'">
            <div class="text font-size-24">{{item.title}}<div class="panano-date-info font-size-24">{{item.isNewHouseTime}}</div></div>
          </div>
          <div class="panano-see"><i class="icon icon_see_img"></i><span class="font-size-24">{{item.pageViewCount}}</span></div>
          <div class="div_relative font-size-28 cf p_t_20">
            <img :src="item.avatarUrl" class="cir-50 fl">
            <div class="user-name ">{{item.nickName}}</div>
            <div class="date fr font-small">{{item.timeText}}</div>
          </div>
        </div>
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
    name: 'searchResultPanano',

    data: function () {
      return {
        message: '',
        data: '',
        PageSize: 10,
        PageIndex: 0,
        allLoaded: false,
        scrollMode: 'auto',
        ErrMessage: '找不到相关实景哦'
      }
    },
    props: {
      searchKey: ''
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
        vm.$store.dispatch('getSearchResultPanano', {
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
      goUrl (obj) {
        window.location.href = obj
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
        vm.$store.dispatch('getSearchResultPanano', {
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
