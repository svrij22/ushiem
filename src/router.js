import VueRouter from "vue-router";
import MainPageComponent from "@/components/MainPageComponent";
import OntwerpPageComponent from "@/components/OntwerpPageComponent";
import AanlegPageComponent from "@/components/AanlegPageComponent";

export default new VueRouter({
    routes:[
        {path: '/', component: MainPageComponent},
        {path: '/ontwerpen', component: OntwerpPageComponent},
        {path: '/aanleg', component: AanlegPageComponent},
    ]
})