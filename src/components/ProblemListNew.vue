<template>
  <div>
    <div class="r_d_head" v-for="item in Data">
      <router-link :to="{name: 'ProblemDetail', query: { haId: item.haId,  type: item.typeId }}">
        <div class="head_info cf">
          <div class="fl" style="position: relative;">
            <img class="cir-50" :src="item.questAvatar">
          </div>
          <div class="name fl font-content">{{item.questNickName}}</div>
        </div>
        <div class="head-content p_t_10 font-size-30">{{item.questionTxt}}</div>
        <div class="other_info font-small p_t_b_30">{{item.timeText}},已有{{item.answerTimes}}人回答</div>
        <div class="answer_img"><img src="../assets/img/btn_goAnswer.png" class="img_block"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ProblemListNew',
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
        vm.getNewProblem()
      },
      getNewProblem () {
        let vm = this
        // 发起 dispatch 到 action
        vm.$store.dispatch('getNewProblem', { 'cityId': this.cityId, 'PageSize': 10, 'PageIndex': 0 }).then((result) => {
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
