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
    border: 3px solid #E2E2E2;
    padding: 10px 55px;
    border-radius: 5px;
    cursor: pointer;
    background: #28242A;
    color: #fff;
    display: flex;
    align-items: center;
}
</style>