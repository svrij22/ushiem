<template>
    <div class="row">
        <div class="col-lg-3 col-md-6">
            <b-card>
                <img src="../assets/plant.png"/>
                <h3>Wij werken met passie</h3>
                <h5>Meer dan 10 jaar ervaring met het leggen van tuinen</h5>
            </b-card>
        </div>
        <div class="col-lg-3 col-md-6">
            <b-card>
                <img src="../assets/exca.png" style="width: 100px"/>
                <h3>Alle tools in huis</h3>
                <h5>Weinig dingen zijn ons vreemd op tuingebied.</h5>
            </b-card>
        </div>
        <div class="col-lg-3 col-md-6">
            <b-card>
                <img src="../assets/design.png" style="width: 90px"/>
                <h3>Maatwerk is ons motto</h3>
                <h5>Voor elke tuin maken wij een vakkundig ontwerp</h5>
            </b-card>
        </div>
        <div class="col-lg-3 col-md-6">
            <b-card>
                <img src="../assets/regie.png" style="width: 115px"/>
                <h3>De regie blijft bij u</h3>
                <h5>De regie blijft ten alle tijde bij u</h5>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BadgesVue"
    }
</script>

<style lang="scss" scoped>

    .row{
        margin-top: 30px;
    }

    .card{
        background-color: rgba(255, 255, 255, 0.81) !important;
        margin: 5px;
        border-radius: 10px;
        padding: 10px;
        padding-bottom: 30px;
        height: 90%;
        text-align: center;

        & img{
            height: 120px;
            width: 120px;
            padding-bottom: 10px;
            object-fit: contain;
        }

        & h3{
            min-height: 100px;
        }

        & h5{
            padding-top: 20px;
        }
    }
</style>