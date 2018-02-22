<template>
  <div class="w_item expert_box cf">
    <div class="w_tit font-size-36">帮帮专家
      <router-link :to="{name: 'ProblemExpertMore'}" class="fr font-content">
        查看全部 <i class="icon icon_more"></i>
      </router-link>
    </div>

    <div class="classify_data">
      <div class="expert_item cf" v-for="item in ProblemExpertData">
        <router-link :to="{name: 'UserInfo', query: {userId: item.customId}}" :UserId="item.customId">
          <div class="headImg square-100 fl" :style="'background-image: url('+item.customAvatar+')'"></div>
          <div class="m_left_20 fl" style="width: 60%; overflow:hidden">
            <div class="font-size-30">{{item.customNickName}}</div>
            <div class="desc m_top_10 font-content" style=" overflow: hidden;white-space: nowrap;">{{item.customHonour}}</div>
            <div class="m_top_10 font-small">{{item.countAnswer}}个回答，{{item.countListen}}个旁听</div>
          </div>
          <div class="to_question font-size-24">{{item.customQuesAmount}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProblemExpert',
  data () {
    return {
      message: '',
      ProblemExpertData: ''
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
      vm.getExpertData()
    },
    getExpertData () {
      let vm = this
      // 发起 dispatch 到 action
      vm.$store.dispatch('getExpertData', { 'cityId': this.cityId, 'PageSize': 3 }).then((result) => {
        if (result) {
          vm.ProblemExpertData = result
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
