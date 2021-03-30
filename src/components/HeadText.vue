<template>
    <div class="container">
        <div class="heading-holder">
            <h1 :style="getTextStyle()" class="mobile">{{text}}</h1>
            <h1 :style="`font-size: ${max}px`" class="desk">{{text}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeadText",
        props: ['text', 'size', 'max'],
        methods: {
            getTextStyle(){
                return {
                    'font-size': `calc(12vw * ${this.size})`,
                }
            }
        }
    }
</script>

<style scoped>
    .container{
        height: 100%;
    }

    .heading-holder{
        text-align: left;
        color: white;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 50px;
    }

    h1{
        padding-left: 5vw;
        padding-top: 12vw;
        text-shadow: 0 0 20px #000000,-1px 0 black, 0 2px black, 2px 0 black, 0 4px black;
        display: none;
    }

    @media screen and (max-width: 999px){
        h1.mobile{
            display: block!important;
        }
    }

    @media screen and (min-width: 1000px){
        h1.desk{
            display: block!important;
        }
    }
</style>