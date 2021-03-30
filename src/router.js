import VueRouter from "vue-router";
import MainPageComponent from "@/view/MainPageComponent";
import OntwerpPageComponent from "@/view/OntwerpPageComponent";
import AanlegPageComponent from "@/view/AanlegPageComponent";
import ContactPageComponent from "@/view/ContactPageComponent";

export default new VueRouter({
    routes:[
        {path: '/', component: MainPageComponent},
        {path: '/ontwerpen', component: OntwerpPageComponent},
        {path: '/aanleg', component: AanlegPageComponent},
        {path: '/contact', component: ContactPageComponent},
    ]
})