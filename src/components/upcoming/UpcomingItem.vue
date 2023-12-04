<template>
    <Transition name="upcoming" mode="out-in">
        <div class="upcoming__item" v-if="activeSlide == index">
            <img class="upcoming__img" :src="imgFullPath + movie.backdrop_path" alt="">
            <h1 class="upcoming__title">
                {{ movie.title }}
            </h1>
            <p class="upcoming__text">
                {{ movie.overview }}
            </p>
            <Btn/>
            <div class="upcoming__next" @click="$emit('next')">
                <p class="upcoming__next-text">
                    Следующий
                </p>
                <h3 class="upcoming__next-title">
                    {{ next.title }}
                </h3>
                <img class="upcoming__next-img" :src="imgPath + next.backdrop_path">
                <div class="upcoming__next-line"></div>
            </div>
        </div>
    </Transition>
</template>
<script setup>
    import Btn from "../../components/UI/Btn.vue"
    const props = defineProps({
        movie: Object,
        next: Object,
        activeSlide: Number,
        index: Number
    })
    const imgFullPath = import.meta.env.VITE_IMG_FULL
    const imgPath = import.meta.env.VITE_IMG
</script>

<style lang="scss">
    .upcoming-enter-active,
    .upcoming-leave-active{
        transition: 1s;
    }
    .upcoming-enter-from,
    .upcoming-leave-to{
        opacity: 0;
        transform: scale(1.2);
    }
</style>