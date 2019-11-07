import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import First from "../components/first.vue";
import A from "../components/A.vue";
import B from "../components/B.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: First
    },
    {
        path: "/A",
        component: A
    },
    {
        path: "/B",
        component: B
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;