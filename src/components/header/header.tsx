import { defineComponent } from "vue"
import style from "./header.module.scss"

export default defineComponent({
  name: "my-header",
  setup() {
    return () => {
      return (
        <div class={style.header}>
          <span class={style.icon}></span>
          <h1 class={style.text}>Chicken Music</h1>
        </div>
      )
    }
  },
})
