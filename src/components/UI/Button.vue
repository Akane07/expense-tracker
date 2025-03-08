<template>
    <button>
        <slot></slot>
    </button>
</template>


<script setup>

</script>

<style scoped>
button{
    height: 35px;
    width: auto;
    outline: none;
    border: 3px solid #1E1E27;
    padding: 20px 25px;
    font-size: 24px;
    border-radius: 85px;
    cursor: pointer;
    background: transparent;
    color: #FFF6F3;
    display: flex;
    align-items: center;
}
button:hover{
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
</style>