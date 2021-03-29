import VueRouter from "vue-router";
import MainPageComponent from "@/components/MainPageComponent";
import OntwerpPageComponent from "@/components/OntwerpPageComponent";

export default new VueRouter({
    routes:[
        {path: '/', component: MainPageComponent},
        {path: '/ontwerpen', component: OntwerpPageComponent},
    ]
})