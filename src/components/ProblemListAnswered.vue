<template>
  <div>
    <div class="r_d_head p_answered_item" v-for="item in Data">
      <router-link :to="{name: 'ProblemDetail', query: { haId: item.haId,  type: item.typeId }}">
        <div class="head-content p_b_10 font-size-30">{{item.questionTxt}}</div>
        <div class="answer_name font-content m_b_20">{{item.answerNickName}}|{{item.answerHonour}}</div>

        <div class="p_b_20">
          <div class="video_box cf">
            <div class="video_box_left fl">
              <img class="cir-72 fl" :src="item.answerAvatar">
            </div>
            <template v-if="item.v_answerVoice == '' && item.answerTxt != ''">
              <div class="text_main font-size-30" v-if="item.payMoney>0&&item.showText==0&&item.typeId==0">
                此答案需要付费查看，<span class="color-289">1元查看</span>
              </div>
              <div class="text_main font-size-30" v-else><div class="text p_three">{{item.answerTxt}}</div></div>
            </template>
            <template v-else>
              <div class="video_main video_box_main-problem" :data-src="item.v_answerVoice" :data-number="item.v_i"
                   :data-index="item.index" :data-howl="item.howl" :data-curPageIndex="item.curPageIndex" >
                <div class="video_left">
                  <i class="icon icon_video_wave"></i>
                </div>
                <div class="video_text_box">
                  <div class="video_text font-size-28">{{item.video_text}}</div>
                </div>
                <div class="video_right">
                  <div class="video_play"></div>
                </div>
              </div>
            </template>
          </div>
          <div class="font-small">
            <div class="data_info p_t_b_10 cf">
              <div class="fl date">{{item.timeText}}<span v-show="item.v_answerVoice!=''">，{{item.listenTimes}}人听过</span></div>
              <div class="fr">
                <div class="fl praise" :type="item.typeId" :data-id="item.praiseId" :data-praise="item.v_i"
                     :data-value="item.praiseTimes" :data-answerTimes="item.answerTimes">
                  <img v-show="item.praise=='false'||item.praise==''||item.praise==null" src="../assets/img/icon_praise.png" class="img_mid"/>
                  <img v-show="item.praise" src="../assets/img/icon_praise_sel.png" class="img_mid"/>
                  <span>{{item.praiseTimes}}</span>
                </div>
              </div>
            </div>
            <div v-show="item.answerTimes>1" class="more_answer font-size-28 p_t_10">查看更多回答 ></div>
          </div>
        </div>
      </router-link>
    </div>


  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ProblemListAnswered',
    data () {
      return {
        message: '',
        Data: ''
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
        vm.getAnsweredProblem()
      },
      getAnsweredProblem () {
        let vm = this
        // 发起 dispatch 到 action
        vm.$store.dispatch('getAnsweredProblem', { 'cityId': this.cityId, 'PageSize': 10, 'PageIndex': 0 }).then((result) => {
          if (result) {
            vm.Data = result
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
