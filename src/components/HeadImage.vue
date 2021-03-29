<template>
    <div class="image-container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HeadImage"
    }
</script>

<style scoped>

    .image-container{
        height: 650px;
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