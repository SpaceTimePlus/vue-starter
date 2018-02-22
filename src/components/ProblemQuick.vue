<template>
  <div class="quick_ask w_item">
    <div class="new_tit font-size-36">快速提问</div>
    <div class="a_u_desc font-size-28 cf">
      <textarea class="edit font-size-28" v-model="askContents" maxlength="200" rows="5" placeholder="请描述您的问题，相关楼盘，购房需求等，5000+平台专家，极速帮您解决购房难题"></textarea>
      <div class="num fr"><span>{{askContents.length}}</span>/200</div>
    </div>
    <div class="w_button font-size-32 w_button_quick" @click="sendQuestion(askContents)">免费提问</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Toast } from 'mint-ui'
  export default {
    name: 'ProblemQuick',
    data () {
      return {
        message: '',
        code: '',
        askContents: '',
        quesScene: 0,
        data: '',
        quickAskStatus: 0
      }
    },
    computed: {
      ...mapGetters(['cityId'])
    },
    mounted () {
    },
    methods: {
      sendQuestion (message) {
        let vm = this
        if (message.trim().length < 5) {
          Toast('请认真填写提问内容哦')
          return
        }
        if (vm.quickAskStatus === 1) {
          return
        }
        vm.quickAskStatus = 1
        vm.$store.dispatch('submitQuickQuestion', {
          'askContents': message,
          'cityId': this.cityId,
          'quesScene': this.quesScene
        }).then((result) => {
          if (result) {
            Toast('提问成功')
            vm.quickAskStatus = 0
            window.location.href = '../UserInfo?userId=' + result.questioner
          }
        })
      }
    }
  }
</script>
