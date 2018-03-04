import vue from 'vue'
import App from './app.vue'
import './assets/test.css'
import './assets/hello.jpg'
import './assets/test-stylus.styl'

const root =document.createElement("div")
document.body.appendChild(root)
new Vue({
    render:(h)=>h(App)
}).$mount(root)