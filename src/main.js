import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data:{
    currentRoute: window.location.pathname
  },
  computed:{
        currentComponent(){
          return  routes[this.currentRoute]
        }
  }
  ,
  render: function(h){
return h(this.currentComponent)
  },
}).$mount('#app')
