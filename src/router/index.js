import { createRouter, createWebHashHistory } from "vue-router";
import mainView from "@/views/mainView.vue";


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: mainView
    }
  ]
})



export default router
