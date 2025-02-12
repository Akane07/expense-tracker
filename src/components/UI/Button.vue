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
</style>