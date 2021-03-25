import { Button } from 'vant'
import { App } from '_vue@3.0.7@vue'

const ant = {
  install(Vue: App) {
    Vue.component(Button.name, Button)
  },
}

export default ant;
