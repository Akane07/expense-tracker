<template>
    <div class="foot-wrapper">
        <div class="author">
            <img src="../../assets/author.svg" alt="">
            EXPENSE TRACKER
        </div>
        <div class="foot-line">
            <div class="logo-wrapper">
                <img src="../../assets/Logo.svg" alt="Логотип" class="logo">
            </div>
        </div>

        <div class="icons">
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LtgklwImhYQF1o0j" class="iconA"><img src="../../assets/youtube.svg" alt="" class="yt"></a>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LtgklwImhYQF1o0j" class="iconA"><img src="../../assets/telegram.svg" alt="" class="tg"></a>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LtgklwImhYQF1o0j" class="iconA"><img src="../../assets/github.svg" alt="" class="gh"></a>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LtgklwImhYQF1o0j" class="iconA"><img src="../../assets/vue.svg" alt="" class="vue"></a>
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
.author:hover{
    transform: perspective(500px) translateZ(15px) scale(1.05);
    animation: glow-pulse 1.5s ease-in-out infinite;
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
.logo-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 1;
}

.logo {
  width: 75px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: drop-shadow(0 0 0 transparent);
}

.logo-wrapper:hover .logo {
  transform: perspective(500px) translateZ(15px) scale(1.05);
  animation: glow-pulse 1.5s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    filter: drop-shadow(0 0 3px rgba(181, 24, 45, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 12px rgba(181, 24, 45, 0.8));
  }
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
.yt:hover{
    transform: perspective(500px) translateZ(15px) scale(1.05);
    animation: glow-pulse 1.5s ease-in-out infinite;
}
.tg{
    width: 50.5px;
    height: 46.5px;
    cursor: pointer;
}
.tg:hover{
    transform: perspective(500px) translateZ(15px) scale(1.05);
    animation: glow-pulse 1.5s ease-in-out infinite;
}
.gh{
    width: 49px;
    height: 43.5px;
    cursor: pointer;
}
.gh:hover{
    transform: perspective(500px) translateZ(15px) scale(1.05);
    animation: glow-pulse 1.5s ease-in-out infinite;
}
.vue{
    width: 49px;
    height: 43.5px;
    cursor: pointer;
}
.vue:hover{
    transform: perspective(500px) translateZ(15px) scale(1.05);
    animation: glow-pulse 1.5s ease-in-out infinite;
}
.iconA{
    z-index: 1;
}
</style>