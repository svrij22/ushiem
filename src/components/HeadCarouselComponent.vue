<template>
    <div class="swiper-cont">
        <!-- swiper1 -->
        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
            <swiper-slide class="slide-1"></swiper-slide>
            <swiper-slide class="slide-2"></swiper-slide>
            <swiper-slide class="slide-3"></swiper-slide>
            <swiper-slide class="slide-4"></swiper-slide>
            <swiper-slide class="slide-5"></swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>

        <div class="overlay" style="width: 100%">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: 'HeadCarouselComponent',
        title: 'Thumbs gallery with Two-way control',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOptionTop: {
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                    },
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

    .swiper-cont{
        width: 100%;
        position: relative;
    }

    .overlay{
        position: absolute;
        pointer-events: none;
        top: 0;
        z-index: 1;
    }

    .swiper {
        height: 600px!important;

        .swiper-slide {
            background-size: cover;
            background-position: center;

            &.slide-1 {
                background-image:url('../assets/preview1.jpg');
            }
            &.slide-2 {
                background-image:url('../assets/preview2.jpg');
            }
            &.slide-3 {
                background-image:url('../assets/prev3.jpg');
            }
            &.slide-4 {
                background-image:url('../assets/preview1.jpg');
            }
            &.slide-5 {
                background-image:url('../assets/preview1.jpg');
            }
        }

        &.gallery-top {
            height: 80%;
            width: 100%;
        }

        &.gallery-thumbs .swiper-slide {
            width: 25%;
            height: 100%;
            opacity: 0.4;
        }

        &.gallery-thumbs .swiper-slide-active {
            opacity: 1;
        }
    }

    @media screen and (max-width: 880px){
        .swiper{
            height: 70vw!important;
        }
    }
</style>