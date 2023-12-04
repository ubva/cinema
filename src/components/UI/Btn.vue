<template>
   <router-link to="/" class="btn">
    <img src="../../assets/images/bars.svg" alt="">
    Подробнее
   </router-link>
</template>
<script>
</script>
<style lang="scss">
@import "../../assets/sass/media.scss";

    .btn{
        width:180px;
        height:50px;
        border-radius: 10px;
        background:rgba(20, 154, 3, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        color:rgba(255, 255, 255, 1);
        @include media(800){
            width: 150px;
            height: 40px;
            font-size: 18px;
            border-radius: 8px;
            img{
                width: 18px;
            }
        }
        @include media(600){
            width: 120px;
            height: 35px;
            font-size: 15px;
            border-radius: 6px;
            gap: 8px;
            img{
                width: 14px;
            }
        }
        @include media(400){
            width: 100px;
            height: 30px;
            font-size: 12px;
            gap: 5px;
            img{
                width: 12px;
            }
        }
    }
</style>