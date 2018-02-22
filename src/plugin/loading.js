/**
 * Created by dh on 2017/9/18.
 */
import loadingComponent from '../components/loading.vue'

const loading = {
  install: function (Vue) {
    Vue.component('Loading', loadingComponent)
  }
}
export default loading
