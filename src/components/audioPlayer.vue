<!-- 音频播放器 -->
<template>
  <div>
    <audio v-on:play="audioPlayEvent"
           v-on:pause="audioPauseEvent"
           v-on:ended="audioEndedEvent"
           ref="audioPlayer"
           :src="audioList.answerVoice?audioList.answerVoice:null" autobuffer >
    </audio>
    <div class="video_main video_box_main-problem" :data-src="audioList.v_answerVoice" :data-number="audioList.v_i"
         :data-index="audioList.index" :data-howl="audioList.howl" :data-curPageIndex="audioList.curPageIndex"
         :class="!isplay?'audioPlayBtn':'audioPauseBtn'" @click="playCurrentAudioFn">
      <div class="video_left">
        <i class="icon icon_video_wave"></i>
      </div>
      <div class="video_text_box">
        <div class="video_text font-size-28">{{audioList.videoText}}</div>
      </div>
      <div class="video_right">
        <div class="video_play"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  // 过滤器
  Vue.filter('formatFilter', function (value) {
    if (!value) {
      return '00:00'
    }
    var time = Math.floor(value)
    var m = Math.floor(time / 60).toString()
    m = m.length < 2 ? '0' + m : m
    var s = (time - parseInt(m) * 60).toString()
    s = s.length < 2 ? '0' + s : s
    return `${m}:${s}`
  })
  export default {
    data () {
      return {
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
    props: {
      /*
      *url  -- 音频路径
      *
      */
      audioList: null
    },
    computed: {
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
    activated: function () {
      // var that = this;
      // setTimeout(function(){
      //      that.totalTime = that.formatTime(document.querySelector('audio').duration);
      // },10);
    },
    methods: {
      // 点击按钮播放音频
      playCurrentAudioFn (ev) {
        // 如果不在播放中
        if (!this.isplay) {
          this.player.play()
          this.isplay = true
        } else {
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
