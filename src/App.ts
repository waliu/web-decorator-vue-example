import { Component } from 'web-decorator-vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
@Component({
  name: 'app-root',
  components: {
    HelloWorld,
    RouterLink,
    RouterView
  }
})
export default class AppRoot {}
