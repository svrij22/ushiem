<template>
    <b-card
            title="Aaanleg, onderhoud etc."
            tag="article"
            :style="contactstyle"
            class="mb-2">
        <hr>
        <div class="card-content">
            <b-card-text style="text-align: left; font-size: 18px">
                <b>Leen van der Sluijs</b><br>
                Ringwei 8,<br>
                9153 BK Brantgum,<br>
            </b-card-text>

            <b-button href="tel:0620081280" variant="primary" size="lg" style="margin-bottom: 10px">06 2008 1280</b-button>
            <b-button href="mailto:ushiemhoveniers@kpnmail.nl" variant="primary" size="lg">ushiemhoveniers@kpnmail.nl</b-button>
        </div>
    </b-card>
</template>

<script>
    export default {
        name: "ContactCard",
        props: ['contactstyle']
    }
</script>

<style scoped>
    .card-content{
        display: flex;
        flex-direction: column;
        pointer-events: all;
    }

    .btn-primary{
        background-color: #46764e !important;
    }
</style>