import { createApp } from 'vue'
import components from './components/UI'
import App from './App.vue'

const app = createApp(App)

components.forEach(component => {
  console.log(component)
  app.component(component.name, component)
})

app.mount('#app')
