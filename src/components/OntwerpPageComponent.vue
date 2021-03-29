<template>
    <div>

        <!--Head image-->
        <head-image>
            <img src="../assets/drawn.jpg"/>
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
                            bij u. Wij komen graag bij u langs voor een
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
            </div>

            <!--Second image-->
            <div id="container-2">
                <div class="row container">
                    <div class="col-lg-6">
                        <div class="img-container">
                            <img src="../assets/tek3.jpg">
                        </div>
                    </div>
                    <div class="col-lg-6 text-view">
                        <h5>Hierna kunnen uw ideeën en wensen eventueel
                            worden verwerkt in een uniek en creatief
                            ontwerp voor úw tuin. Natuurlijk wordt
                            ieder ontwerp begeleid door een
                            vrijblijvende en gespecificeerde
                            offerte wat betreft eventuele
                            aanleg en materiaalkosten.
                            Doordat de tekening digitaal
                            gemaakt word kan er nog naar hartelust
                            geschoven en veranderd worden tot het
                            ontwerp aan al uw wensen voldoet.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadImage from "@/components/HeadImage";
    export default {
        name: "OntwerpPageComponent",
        components: {HeadImage}
    }
</script>

<style lang="scss" scoped>
    .main-page{
        padding-top: 3rem;
        text-align: left;
    }

    .row{
        padding: 20px;
        padding-bottom: 25px;
        padding-top: 25px;
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

    .img-container{
        display: flex;
        justify-content: center;
        & img{
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            max-width: 80vw;
            border-radius: 8px;
        }
    }
</style>