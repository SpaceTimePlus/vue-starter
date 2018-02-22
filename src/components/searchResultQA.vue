<template>
  <div class="font-size-24 font-color-7f" >
    <template v-if="ProblemExpertData||Problem">
      <div class="top-head-content p-30">共找到{{ProblemExpertData.itemCount?ProblemExpertData.itemCount:0}}个人物，{{Problem.itemCount?Problem.itemCount:0}}个问题</div>
      <!--问答列表-->
      <template v-if="ProblemExpertData">
        <div class="result-head line_bottom p-30">
          <span>人物</span>
          <router-link :to="{name: 'searchResultMoreExpert', query: {'key': searchKey}}" class="font-color-7f fr"> 查看更多 ></router-link>
        </div>
        <div class="expert_item expert_item_1 line_bottom cf" v-for="item in ProblemExpertData">
          <router-link :to="{name: 'UserInfo', query: {userId: item.customId}}" :UserId="item.customId">
            <div class="headImg cir-80 fl" :style="'background-image: url('+item.customAvatar+')'"></div>
            <div class="m_left_20 fl font-color-7f" style="width: 60%; overflow:hidden">
              <div class="name">{{item.customNickName}}</div>
              <div class="desc m_t_6" style=" overflow: hidden;white-space: nowrap;">{{item.customHonour}}</div>
              <div class="m_t_6">{{item.countAnswer}}个回答，{{item.countPraise}}个好评</div>
            </div>
          </router-link>
        </div>
      </template>
      <template v-if="Problem">
        <div class="result-head line_bottom p-30">
          <span>问题</span>
          <router-link :to="{name: 'searchResultMoreQA', query: {'key': searchKey}}" class="font-color-7f fr"> 查看更多 ></router-link>
        </div>
        <router-link class="r_d_head cf line_bottom font-color-7f" tag="div" v-for="item in Problem"
                     :to="{name: item.typeId===0?'ProblemDetail':'ProblemDetailAnswer',
                 query: {  haId: item.haId, hadId: item.hadId, type: item.typeId}}">
          <div class="line-h-12 p_b_10"><div class="text-hide text-hide-3">{{item.questionTxt}}</div></div>
          <div class="title p_b_10">
            <div class="name text-hide text-hide-1">回答者：{{item.questNickName}} | {{item.answerHonour}}</div>
          </div>
          <div class="">
            <div class="data_info p_b_10 cf">
              <div class="fl date">{{item.timeText}}<span v-show="item.answerVoice!=''">，{{item.listenTimes}}人听过</span></div>
              <div class="fr">
                <span>好评 {{item.praiseTimes}}</span><span class="m_left_20">旁听 {{item.listenTimes}}</span>
              </div>
            </div>
          </div>
        </router-link>
      </template>
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
    name: 'searchResultQA',

    data: function () {
      return {
        message: '',
        data: '',
        ProblemExpertData: '',
        Problem: '',
        PageSize: 3,
        PageIndex: 0,
        ErrMessage: '找不到相关问答哦',
        searchKey: ''
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
        vm.$store.dispatch('getSearchResultBang', {
          'key': this.searchKey,
          'cityId': this.cityId,
          'PageSize': this.PageSize,
          'PageIndex': this.PageIndex
        }).then((result) => {
          if (result) {
            vm.ProblemExpertData = result
          }
        })
        vm.$store.dispatch('getSearchResultQA', {
          'key': this.searchKey,
          'cityId': this.cityId,
          'PageSize': this.PageSize,
          'PageIndex': this.PageIndex
        }).then((result) => {
          if (result) {
            vm.Problem = result
          }
        })
      },
      goUrl (obj) {
        window.location.href = obj
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
