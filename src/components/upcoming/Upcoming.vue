<template>
    <div class="upcoming" v-if="upcomingArr">
        <UpcomingItem v-for="(movie, i) in upcomingArr" :key="movie.id" :movie="movie" :activeSlide="activeSlide" :index="i" @next="nextSlide()" :next="upcomingArr[ i == upcomingArr.length -1 ? 0: i+1]"/>
        <!-- {{ luboy }} ; -->
    </div>
</template>
<script setup>
    import UpcomingItem from '../upcoming/UpcomingItem.vue'
    import { useUpcoming } from '../../stores/upcoming';
    const store = useUpcoming()
    import { computed, onMounted, ref } from 'vue';
    onMounted(() =>{
        store.getUpcoming()
    })
    const upcomingArr = computed(()=>store.upcoming)
    const activeSlide  = ref(0)
    let timeout = ref(null)
    const nextSlide = (i)=>{
        clearTimeout(timeout)
        if(activeSlide.value == upcomingArr.value.length -1){
            activeSlide.value = 0
        } else{
            activeSlide.value++
        }
        timeout = setTimeout(nextSlide, 10000)
    }
    timeout = setTimeout(nextSlide, 10000)
    console.log(upcomingArr.value);
</script>
