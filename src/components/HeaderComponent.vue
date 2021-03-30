<template>
    <div class="header-comp">
        <div class="d-block text-white top-info">
            <div class="slogan">Tuinaanleg is ons werk en onze passie. Gratis advies en offerte:</div>
            <div class="phone">
                <v-icon name="phone"/>
                <a href="tel:06-40455969">06 - 123 12 123</a>
            </div>
            <div class="mail">
                <v-icon name="envelope"/>
                <a href="mailto:info@tuinaanleg-vandorresteijn.nl">info@test.nl</a>
            </div>
        </div>

        <header :class="'navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar ' + headerclass">
            <div class="container">
                <a class="navbar-brand mr-0 mr-md-2" >
                    <img src="../assets/logo_m.png"/>
                </a>
                <side-bar-component/>
            </div>
        </header>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import _ from 'lodash';
    import SideBarComponent from "@/components/SideBarComponent";

    export default {
        name: "HeaderComponent",
        components: {SideBarComponent},
        data(){
            return{
                headerclass: false,
                scrollDif: 0
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll: _.debounce( function () {
                let addScroll = (this.headerclass == 'small-header') ? 40 : 0
                let scrolled = document.documentElement.scrollTop + addScroll
                console.log(`test addscroll ${addScroll} scrolledy ${scrolled}`)
                this.headerclass = (scrolled > 50) ? 'small-header' : '';
            }, 80)
        }
    }
</script>

<style lang="scss" scoped>

    .header-comp{
        display: initial;
    }

    /*Top info line*/
    .d-block.top-info{
        background-color: #313e33;
        display: flex!important;
        flex-direction: row;
        justify-content: center;
        font-weight: bolder;

        padding: 0.5rem 1rem!important;

        & .fa-icon{
            margin: 0 15px;
        }

        & a{
            text-decoration: none;
            outline: 0;
            color: white;
        }
    }

    /*Media Q top info line*/
    @media screen and (max-width: 880px){
        .slogan{
            display: none;
        }
        .d-block{
            font-size: 14px;
        }
    }

    .navbar{
        background-color: white;
        border-bottom: 1px solid white;
        transition: 0.3s;

        & img{
            max-height: 100px;
            transition: 0.3s;
        }
    }


    /*Small header when scrolling*/
    .small-header{
        border-bottom: 1px solid #d5d5d5;
        & img{
            max-height: 70px!important;
        }
    }

    /*Small header when on phone*/
    @media screen and (max-width: 800px){
        .navbar{
            & img{
                max-height: 55px!important;
            }
        }

    }

    .bd-navbar{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1071;
    }
</style>