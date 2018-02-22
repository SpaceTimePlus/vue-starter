<template>
  <div>
    <template v-if="Data.length > 0">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <template v-for="item in Data">
          <router-link class="r_d_head line_bottom cf" tag="div"
                       :to="{name: item.questionTypeId===0?'ProblemDetail':'ProblemDetailAnswer',
                     query: {  haId: item.haId, hadId: item.hadId, type: item.questionTypeId}}">
            <div class="title font-size-28 font-color-3">
              <span class="fr font-size-30 red" v-show="item.questionTypeId===0">{{item.questionPrice==1?'¥ 1':'免费'}}</span>
              <span class="fr font-size-30 red" v-show="item.questionTypeId===2">免费帮答</span>
              <span class="fr font-size-30 red" v-show="item.questionTypeId===5">快问快答</span>
              <span class="fr font-size-30 red" v-show="item.questionTypeId===6">多人咨询</span>
              <div class="head_info cf">
                <div class="fl" style="position: relative;">
                  <img :src="item.answerAvatarUrl" class="cir-50">
                </div>
                <div class="name fl font-content">{{item.answerNickName}}</div>
              </div>
            </div>
            <div class="head-content p_t_b_30 font-size-30">{{item.textContent}}</div>
            <div class="video_box video_box_2 cf">
              <div class="text_main text_main_2 font-size-30"><div class="text">问题来源：{{item.questionContent}}</div></div>
            </div>
            <div class="font-small">
              <div class="data_info p_t_b_10 cf">
                <div class="fl date">{{item.timeText}}</div>
                <div class="fr">评价：{{item.score===0?'差评':(item.score===1?'中评':'好评')}}</div>
              </div>
            </div>
          </router-link>
        </template>
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
    name: 'getForMyComment',
    data () {
      return {
        message: '',
        Data: '',
        searchCondition: {PageIndex: 0, PageSize: 10},
        pageList: [],
        allLoaded: false,
        scrollMode: 'auto',
        ErrMessage: '还没有问题，快去问一个吧'
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
        vm.$store.dispatch('getForMyComment', {
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
        vm.$store.dispatch('getForMyComment', {
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
