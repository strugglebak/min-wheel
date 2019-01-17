<template>
    <div class="row">
        <slot></slot>
    </div>
</template>
<script>
export default {
   name: 'MwRow', 
}
</script>
<style lang="scss" scoped>
    .row {
        border: 1px solid red;
        display: flex;
    }
</style>