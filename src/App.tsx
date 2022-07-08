import { defineComponent } from "vue"
import Header from "./components/header/header"
export default defineComponent({
  name: "app",
  setup() {
    return () => <Header></Header>
  },
})
