<template>
    <div>
        <!--Carousel-->
        <head-carousel-component>
            <div class="container">
                <div class="contact-card-head">
                    <contact-card
                    contactstyle="max-width: 22rem;"/>
                </div>
            </div>
        </head-carousel-component>

        <!--Main page body-->
        <div class="container main-page">

            <!--First image-->
            <div class="row">
                <div class="col-lg-6 text-view">
                    <h1 style="color: rebeccapurple">Welkom!</h1>
                    <h4>Bij Ús Hiem hoveniers uit Brantgum.<br>Het adres in Noord Oost Friesland voor:</h4>
                    <h5>
                        <ul>
                            <li>Ontwerp</li>
                            <li>Aanleg van tuinen en sierbestrating in al haar facetten</li>
                            <li>Groenonderhoud</li>
                        </ul>
                        Voor al uw tuinwensen bent u bij ons aan het goede adres. Maar ook voor “doe het zelvers” is Ús Hiem dé partner voor ontwerp en advies.
                    </h5>
                </div>
                <div class="col-lg-6">
                    <div class="img-container">
                        <img src="../assets/pond2.jpg">
                    </div>
                </div>
            </div>

            <!--Second image-->
            <div class="row" style="padding-top: 3rem">
                <div class="col-lg-5">
                    <div class="img-container">
                        <img src="../assets/bestrating.jpg">
                    </div>
                </div>
                <div class="col-lg-7 text-view">
                    <h1 style="color: rebeccapurple">Complete tuinaanleg!</h1>
                    <h5>
                        Us Hiem is ook gespecialiseerd in de aanleg van nieuwe tuinen.
                        <br>
                        We doen aan inmeten van het grondwerk, bestrating van terrassen,
                        het plaatsen vanschuttingen, looppaden en inritten, overkappingen, veranda's en meer.
                    </h5>
                </div>
            </div>

            <!--Contact card small-->
            <div class="small-contact-card text-view">
                <contact-card/>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadCarouselComponent from "@/components/HeadCarouselComponent";
    import ContactCard from "@/components/ContactCard";
    export default {
        name: "MainPageComponent",
        components: {ContactCard, HeadCarouselComponent}
    }
</script>

<style lang="scss" scoped>
    .contact-card-head{
        display: flex;
        flex-direction: row-reverse;
        padding-top: 80px;
    }

    .small-contact-card{
        display: none;
    }

    @media screen and (max-width: 900px){

        .small-contact-card{
            display: block!important;
        }

        .contact-card-head{
            display: none!important;
        }

        /*Extra padding for text*/
        .text-view{
            margin-right: 20px;
            margin-left: 20px;
            padding-bottom: 20px;
            padding-top: 20px;
        }
    }

    .main-page{
        padding-top: 3rem;
        text-align: left;
    }

    .img-container{
        display: flex;
        justify-content: center;
        & img{
            width: 100%;
            object-fit: cover;
            max-width: 80vw;
            border-radius: 8px;
        }
    }
</style>