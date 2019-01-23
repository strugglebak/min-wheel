<template>
    <div class="tabs-nav">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwTabsNav',
}
</script>
<style lang="scss" scoped>
    .tabs-nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid #e8e8e8;
    }
</style>