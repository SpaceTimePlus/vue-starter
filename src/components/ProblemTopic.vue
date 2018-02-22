<template>
  <div>
    <div class="p-topic w_item" style="margin-bottom: 0" v-if="Data">
      <audio v-on:play="audioPlayEvent"
             v-on:pause="audioPauseEvent"
             v-on:ended="audioEndedEvent"
             :src="Data[0].src?Data[0].src:null" ref="audioPlayer" autobuffer >
      </audio>
      <div class="w_tit font-size-36" >热门语音
        <router-link :to="{name: 'ProblemShortAudio'}" class="fr font-content">
          查看全部 <i class="icon icon_more"></i>
        </router-link>
      </div>
      <div class="p-topic_content font-size-30" :class="!isplay?'audioPlayBtn':'audioPauseBtn'">
        <div class="t_left">
          <div class="t_left-title topic_play" v-for="(item, index) in Data" v-bind:class="{pause: i==index}" @click="playCurrentAudioFn(item.src, index)">
            <i class="icon icon_topic_play m_r_20"></i>{{item.title}}
          </div>
        </div>
        <div class="t_right">
          <button class="button_fz" id="station" role="button" @click="playCurrentAudioFn(null, i)">play</button>
        </div>
      </div>
    </div>
    <div class="fenge"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ProblemTopic',
    data () {
      return {
        message: '',
        Data: '',
        audioList: '',
        i: 0,
        // 是否正在播放中
        isplay: false,
        // 上次的音频码
        lastTime: null,
        // 循环的time
        timer: null,
        // 滑动条按钮的x位置
        spaceX: 0
        // 音频的总时长
        // totalTime: null
      }
    },
    computed: {
      ...mapGetters(['cityId']),
      // 获得播放器时间码对象
      playTimer () {
        // 返回对象
        return this.$refs.audioTimer
      },
      // 获得播放器对象
      player () {
        // 返回对象
        return this.$refs.audioPlayer
      }
    },
    mounted () {
      // 初始化
      this.init()
    },
    methods: {
      init () {
        let vm = this
        vm.getTopicData()
      },
      getTopicData () {
        let vm = this
        // 发起 dispatch 到 action
        vm.$store.dispatch('getTopicData', { 'cityId': this.cityId, 'PageSize': 3 }).then((result) => {
          if (result) {
            vm.Data = result
          }
        })
      },
      // 点击按钮播放音频
      playCurrentAudioFn (ev, index) {
        // 如果不在播放中
        this.i = index
        if (!this.isplay || (this.player.src !== ev && ev != null)) {
          if (this.player.src !== ev && ev != null) {
            this.player.src = ev
          }
          this.player.play()
          this.isplay = true
        } else if ((this.isplay && this.player.src === ev) || ev === null) {
          this.player.pause()
          this.isplay = false
        }
      },
      // 音频播放事件
      audioPlayEvent (event) {
        // clearInterval(this.timer);
        // var that = this
        // 更新播放码的时间
      },
      // 音频暂停事件
      audioPauseEvent (event) {
        clearInterval(this.timer)
      },
      // 音频播放完事件
      audioEndedEvent (event) {
        this.isplay = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
