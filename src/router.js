import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import BookList from "./BookList";
import BookContent from "./BookContent";
import BookPic from "./BookPic";
import SmpIndex from "./SmpIndex";


// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: SmpIndex,
        meta: {index: 1}
    },
    {
        path:"/BookList",
        component: BookList,
        meta: {index: 2}
    },
    {
        path:"/BookContent/:txtid",
        component: BookContent,
        meta: {index: 3}
    },
    {
        path:"/BookPic",
        component: BookPic
    }
]

var router =  new VueRouter({
    routes
})
export default router;
