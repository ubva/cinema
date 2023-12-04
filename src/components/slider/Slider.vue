<template>
    <div class="slider">
        <h2 class="slider__title">{{ type == "movie" ? "Фильмы" : "Сереалы" }}</h2>
        <swiper :spaceBetween="24" :breakpoints="swiperOption.breakpoints" :navigation="true" :modules="modules" class="mySwiper slider__swiper">
            <swiper-slide class="slider__slide" v-for="popular in popularArr" :key="popular.id">
                <img :src="imgPath + popular.poster_path" alt="">
            </swiper-slide>
        </swiper>
    </div>
    <Info/>
</template>

<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
// import './style.css';
import { Navigation } from 'swiper/modules';
import { defineProps, computed } from 'vue';
import {usePopular} from '../../stores/popular.js'
import Info from "../infoblock/Info.vue";
// const imgFullPath = import.meta.env.VITE_IMG_FULL
    const imgPath = import.meta.env.VITE_IMG
const props = defineProps({
    type:String
});
const popularStore = usePopular()
popularStore.getPopular(props.type)
const popularArr = computed(()=>popularStore[props.type])
const modules = [Navigation];
const swiperOption ={
     breakpoints: {
        320: {
        slidesPerView: 1,
        },
        400: {
        slidesPerView: 1.2,
        },
        450: {
        slidesPerView: 1.5,
        },
        500: {
        slidesPerView: 1.7,
        },
        600: {
        slidesPerView: 2.3,
        },
        730: {
        slidesPerView: 2.5,
        },
        900: {
        slidesPerView: 3,
        },
        1000: {
        slidesPerView: 3.5,
        },
        1200: {
        slidesPerView: 4,
        },
        1350: {
        slidesPerView: 4.5,
        },
        1450: {
        slidesPerView: 5,
        }
    }
}
</script>
<style>
    
</style>