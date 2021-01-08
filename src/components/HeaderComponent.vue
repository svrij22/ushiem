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

        <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
            <div class="container">
                <a class="navbar-brand mr-0 mr-md-2" >
                    <img src="../assets/logo_m.png"/>
                </a>
            </div>
        </header>

        <head-carousel-component/>
    </div>
</template>

<script>
    import HeadCarouselComponent from "@/components/HeadCarouselComponent";
    export default {
        name: "HeaderComponent",
        components: {HeadCarouselComponent}
    }
</script>

<style lang="scss" scoped>

    .header-comp{
        display: initial;
    }

    /*Top info line*/
    .d-block.top-info{
        background-color: #444444;
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

        & img{
            max-height: 100px;
        }
    }

    .bd-navbar{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1071;
    }
</style>