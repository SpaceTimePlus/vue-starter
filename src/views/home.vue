
<template>
    <div>
      Home
    </div>
</template>
<script>
  import localforage from 'localforage'

  export default{
    name: 'home',

    data: function () {
      return {
        message: ''
      }
    },
    props: {
    },
    watch: {
    },
    created () {
      console.log('created')
    },
    // ... 其他阶段方法
    async mounted () {
      // localforage 使用示例
      let somekey = await localforage.setItem('test', 'test value')
      console.log('set test  ' + somekey)
      let getSomekey = await localforage.getItem('test')
      console.log('get test  ' + getSomekey)
      localforage.removeItem('test')
      let getSomekey2 = await localforage.getItem('test')
      console.log('removed test  ' + getSomekey2)
      localforage.clear()
    },
    methods: {
      test () {
        console.log('这是一个测试 methods .')
        let vm = this
        // 发起 dispatch 到 action
        vm.$store.dispatch('test', { name: '' })
      }
    },
    filters: {
      // 首字母大写
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    components: {
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // 进入页面前钩子
      })
    }
  }
</script>
<style lang="scss">
</style>
