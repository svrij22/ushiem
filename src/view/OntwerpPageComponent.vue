<template>
    <div>

        <!--Head image-->
        <head-image :imgsrc="require('../assets/drawn.jpg')">
            <head-text text="Tuinontwerp" size="0.6" max="70"/>
        </head-image>


            <!--First image-->
        <div class="main-page">

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 text-view">
                        <h1 style="color: rebeccapurple">Tuinontwerp</h1>
                        <h2 style="color: rebeccapurple">Een persoonlijk maatwerk</h2>
                        <h5>
                            Uw woning verdient een mooie tuin.
                            Dit begint bij een vakkundig en doordacht
                            ontwerp dat past bij uw woning maar vooral
                            bij u. <br><br>Wij komen graag bij u langs voor een
                            oriënterend gesprek. Dit is kosteloos en
                            verplicht u tot niets . Hierin kunnen wij u
                            informeren over de mogelijkheden en onmogelijkheden
                            van uw tuin en u snel een prijsindicatie geven
                            van uw wensen.
                        </h5>
                    </div>
                    <div class="col-lg-6">
                        <div class="img-container">
                            <img src="../assets/tek1.jpg">
                        </div>
                    </div>
                </div>
                <div class="spacer"/>
            </div>

            <!--Second image-->
            <div id="container-2">
                <div class="container">
                    <div class="row">

                        <div class="spacer"/>

                        <div class="col-lg-6">
                            <div class="img-container">
                                <img src="../assets/tek3.jpg">
                            </div>
                        </div>

                        <div class="col-lg-6 text-view">
                            <h2 style="color: #1e4558">Het proces</h2>
                            <h5>Hierna kunnen uw ideeën en wensen eventueel
                                worden verwerkt in een uniek en creatief
                                ontwerp voor úw tuin. <br><br>Natuurlijk wordt
                                ieder ontwerp begeleid door een
                                vrijblijvende en gespecificeerde
                                offerte wat betreft eventuele
                                aanleg en materiaalkosten.
                                <br><br>Doordat de tekening digitaal
                                gemaakt word kan er nog naar hartelust
                                geschoven en veranderd worden tot het
                                ontwerp aan al uw wensen voldoet.
                            </h5>
                        </div>

                        <div class="spacer"/>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadImage from "@/components/HeadImage";
    import HeadText from "@/components/HeadText";
    export default {
        name: "OntwerpPageComponent",
        components: {HeadText, HeadImage}
    }
</script>

<style lang="scss" scoped>
    .main-page{
        padding-top: 3rem;
        text-align: left;
    }

    .spacer{
        width: 100%;
        height: 2rem;
    }

    #container-2{
        background-color: #d5e5c8;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    h5{
        line-height: 1.7rem;
    }

    @media screen and (max-width: 900px){

        /*Extra padding for text*/
        .text-view{
            margin-right: 20px;
            margin-left: 20px;
            padding-bottom: 20px;
            padding-top: 20px;
        }
    }

    .img-container{
        display: flex;
        justify-content: center;
        & img{
            width: 100%;
            max-height: 340px;
            object-fit: cover;
            max-width: 80vw;
            border-radius: 8px;
        }
    }
</style>