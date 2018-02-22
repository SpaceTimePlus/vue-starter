<template>
  <div>
    <template v-if="Data.length > 0">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <div class="r_d_head proListData_content cf" v-for="item in Data" >
          <router-link :to="{name: 'ProblemDetail', query: { type: 0, hadId: item.hadId, haId: item.haId }}">
            <div class="head-content font-size-30">{{item.cHaInfo}} {{item.questionTxt}}</div>
            <div class="head_info p_t_20 font-size-28 cf">
              <div class="fl" style="position: relative;">
                <img class="cir-50" :src="item.answerAvatar">
              </div>
              <div class="name fl">{{item.answerNickName}} | <span style="width:200px;overflow: hidden;white-space: nowrap;">{{item.answerHonour}}</span></div>
            </div>
            <div class="other_info font-small p_t_b_20 cf">
              <span class="fl">{{item.timeText}}</span>
              <div class="fr">
                好评 {{item.praiseTimes}} 旁听 {{item.listenTimes}}
              </div>
            </div>
          </router-link>

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
        ErrMessage: '您暂时还没有旁听过问题哦'
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
        vm.$store.dispatch('getMyListen', {
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
        vm.$store.dispatch('getMyListen', {
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
