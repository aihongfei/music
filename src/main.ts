import { createApp } from "vue"
import App from "./App"
import router from "./router"
import store from "./store"

import "@/assets/scss/index.scss"

createApp(App).use(store).use(router).mount("#app")
