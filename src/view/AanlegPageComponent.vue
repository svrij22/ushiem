<template>
    <div>

        <!--Head image-->
        <head-image :imgsrc="require('../assets/aanleg.jpg')">
            <head-text text="Aanleg" size="1" max="96"/>
        </head-image>


            <!--First image-->
        <div class="main-page">

            <div id="container-2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="img-container">
                                <img src="../assets/kruiwagen2.jpg">
                            </div>
                        </div>
                        <div class="col-lg-6 text-view">
                            <h2 style="color: #1e4558">Het aanleggen van een tuin</h2>
                            <h5>Als er na overleg met u en eventuele aanpassingen
                                een eindontwerp ligt bent u bij ons
                                aan het juiste adres voor vakkundige
                                realisatie hiervan.
                            </h5>
                        </div>
                    </div>
                    <div class="spacer"/>
                </div>
            </div>

            <!--Second image-->
                <div class="container">
                    <div class="row">

                        <div class="spacer"/>

                        <div class="col-lg-6">
                            <div class="img-container">
                                <img src="../assets/graafmachine.jpg">
                            </div>
                        </div>

                        <div class="col-lg-6 text-view">
                            <h2 style="color: #1e4558">Over ons</h2>
                            <h5>
                                Na bijna 10 jaar ervaring zijn weinig dingen
                                ons vreemd op tuingebied. <br>Wij experimenteren
                                regelmatig met nieuwe materialen zoals spiegels
                                en bv. milieuvriendelijke houtsoorten en nieuwe
                                alternatieve verhardingen en proberen dit toe te
                                passen in onze ontwerpen.
                            </h5>

                            <h5>
                                Er staat er een gespecialiseerd team
                                voor u klaar. <br>Met name op het gebied
                                van beplanting hebben wij gedegen vakkennis
                                in huis.<br> Aanleg is ook in fasen mogelijk.
                            </h5>
                        </div>

                        <div class="spacer"/>

                    </div>
                </div>

            <div id="container-2">
                <div class="container">
                    <h2 style="text-align: center">Waarom Us Hiem Hoveniers?</h2>
                    <badges-vue/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadImage from "@/components/HeadImage";
    import HeadText from "@/components/HeadText";
    import BadgesVue from "@/components/BadgesVue";
    export default {
        name: "OntwerpPageComponent",
        components: {BadgesVue, HeadText, HeadImage}
    }
</script>

<style lang="scss" scoped>

    .main-page{
        text-align: left;
    }

    .spacer{
        width: 100%;
        height: 2rem;
    }

    #container-2{
        padding-top: 3rem;
        background-color: #e2e5b4;
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