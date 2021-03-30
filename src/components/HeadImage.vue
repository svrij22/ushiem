<template>
    <div class="image-container">
        <img :src="imgsrc"/>
        <div class="overlay" >
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeadImage",
        props: ['imgsrc']
    }
</script>

<style scoped>

    .overlay{
        position: absolute;
        pointer-events: none;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    .image-container{
        height: 500px;
        position: relative;
    }

    @media screen and (max-width: 880px){
        .image-container{
            height: 70vw!important;
        }
    }

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>