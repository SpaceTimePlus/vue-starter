<template>
  <div class="footer_out">
    <div class="footer_top" v-if="FooterNavState!=1"></div>
    <div class="footer font-size-20">
      <router-link :to="{name: 'home'}" id="home" class="footer_item" v-bind:class="{on:FooterNavState==0}">
        <i class="icon icon_footer_home"></i><p class="name">房源</p>
      </router-link>
      <router-link :to="{name: 'make'}" id="make" class="footer_item" v-bind:class="{on:FooterNavState==1}">
        <i class="icon icon_footer_make"></i><p class="name">制作</p>
      </router-link>
      <router-link :to="{name: 'problem'}" id="problem" class="footer_item" v-bind:class="{on:FooterNavState==2}">
        <i class="icon icon_footer_problem"></i><p class="name">问答</p>
      </router-link>
      <router-link :to="{name: 'my'}" id="my" class="footer_item" v-bind:class="{on:FooterNavState==3}">
        <i class="icon icon_footer_my"></i><p class="name">我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
//  import localforage from 'localforage'
//  import wx from 'tencent-wx-jssdk'
import { mapGetters } from 'vuex'
export default {
  name: 'footer',
  data () {
    return {
      msg: ''
    }
  },
  props: {
    FooterNavState: 0
  },
  computed: {
    ...mapGetters([
      'userId'
    ]),
    ...mapGetters([
      'cityId'
    ])
  },
  mounted () {
    // 初始化
    console.log(this.userId + '||' + this.cityId)
  }
}
</script>
