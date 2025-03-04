<template>
    <div class="foot-wrapper">
        <div class="author">
            <img src="../../assets/author.svg" alt="">
            EXPENSE TRACKER
        </div>
        <div class="foot-line">
            <img src="../../assets/Logo.svg" alt="Logo" class="logo">
        </div>

        <div class="icons">
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LtgklwImhYQF1o0j" class="iconA"><img src="../../assets/youtube.svg" alt="" class="yt"></a>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LtgklwImhYQF1o0j" class="iconA"><img src="../../assets/telegram.svg" alt="" class="tg"></a>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LtgklwImhYQF1o0j" class="iconA"><img src="../../assets/github.svg" alt="" class="gh"></a>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LtgklwImhYQF1o0j" class="iconA"><img src="../../assets/vue.svg" alt="" class="gh"></a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.foot-wrapper{
    width: 100%;
    height: 179px;
    background: #1A1A20;
    box-shadow: 0px 0px 32.5px 0px #00000040;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 68px;
    padding-left: 68px;
}
.author{
    display: flex;
    align-items: center;
    gap: 18px;
    color: #ffffff;
    font-size: 20px;
    cursor: default;
}
.foot-line{
    background: linear-gradient(90deg, rgba(181, 24, 45, 0) 0%, #B5182D 50.2%, rgba(181, 24, 45, 0) 100%);
    height: 64px;
    width: 55%;
    z-index: 0;
    position: absolute;
    left: 22.5%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo{
    width: 75px;
    z-index: 1;
}
.icons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 68px;
}
.yt{
    width: 58px;
    height: 39px;
    cursor: pointer;
    z-index: 1;
}
.tg{
    width: 50.5px;
    height: 46.5px;
    cursor: pointer;
}
.gh{
    width: 49px;
    height: 43.5px;
    cursor: pointer;
}
.iconA{
    z-index: 1;
}
</style>