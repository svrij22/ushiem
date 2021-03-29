<template>
    <div class="footer">
        <div class="container row">
            <div class="grid-col">
                <h4><b>Leen van der Sluijs</b></h4>
                <h5>Ringwei 8</h5>
                <h5>9153 BK</h5>
                <h5>Brantgum</h5>
                <h5><v-icon name="phone" scale="2"/>  06 2008 1280</h5>
                <h5 class="mail"><v-icon name="envelope" scale="2"/> ushiemhoveniers@kpnmail.nl</h5>
            </div>
            <div class="grid-col">
                <h4><b>Anne Coster</b></h4>
                <h5>Langgrousterwei 16</h5>
                <h5>9137 RM</h5>
                <h5>Oosternijkerk</h5>
            </div>
            <div class="grid-col">
                <h4><b>Informatie/advies</b></h4>
                <h5>Aarzel niet om ons om meer informatie of advies te vragen. Vul (geheel vrijblijvend het contactformulier in.</h5>
            </div>
            <div class="grid-col">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>

    .footer{
        display: flex;
        justify-content: center;
        background-color: #313e33;
        padding: 40px;
        padding-bottom: 50px;
        color: white;
        overflow-x: hidden;
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .container{
        display: grid;
        grid-template-columns: auto auto auto auto;
    }

    @media screen and (max-width: 850px) {
        .container{
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
        }
    }
    /**/
    @media screen and (max-width: 600px) {
        .container{
            display: flex;
            flex-direction: column;
        }
    }



    .grid-col{
        text-align: left;
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 40px;
    }

</style>