<template>
    <header>
      <div class="btn-menu">
          <Button @click = "selectLang">{{ lang }}</Button>
          <Button>Регистрация</Button>
          <Button>Вход</Button>
        </div>
      <div class="header-container">
        <div class="logo-wrapper">
          <img src="../../assets/Logo.svg" alt="Логотип" class="logo">
        </div>
        <div class="left-line-container">
            <div class="left-line"></div>
        </div>
        <div class="right-line-container">
            <div class="right-line"></div>
        </div>
      </div>
    </header>
  </template>
  
<script setup>
import Button from './Button.vue';
import { ref } from 'vue';
const lang = ref("Ru")

const selectLang = () => {
  if (lang.value == 'Ru') {
    lang.value = 'En';
  } else {
    lang.value = 'Ru'
  }
}

</script>
  
  <style scoped>
  header {
    position: fixed;
    top: 7px;
    width: 100%;
    height: 103px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .header-container {
    position: relative;
    width: 100%;
    height: 90px;
    top: 26px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    /* padding: 0 20px; */
  }
  
  .logo-wrapper {
  position: absolute;
  left: 50%;
  top: 8%;
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

  .left-line-container{
    width: 100%;
  }
  .right-line-container{
    width: 100%;
    display: flex;
    justify-content: end;
    z-index: 0;
    
    }
  .right-line{
    height: 45px;
    width: 50%;
    background: linear-gradient(90deg, rgba(181, 24, 45, 0) 0%,  #B5182D  100%);
  } 
  .left-line{
    height: 45px;
    width: 50%;
    background: linear-gradient(90deg,  #B5182D 0%, rgba(181, 24, 45, 0) 100%);
}
  .btn-menu{
    height: 67px;
    width: calc(100% / 2.5);
    position: absolute;
    right: 0;
    top: 0px;
    display: flex;
    gap: 55px;
    justify-content: end;
    align-items: center;
    padding-right: 19px;
    z-index: 1;
    /* background: linear-gradient(89.99deg, rgba(24, 29, 49, 0) 5.39%, rgba(24, 29, 49, 0.68) 99.99%); */
  }
  </style>
  