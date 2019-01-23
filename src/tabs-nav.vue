<template>
    <div class="tabs-nav">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwTabsNav',
    inject: ['eventHub'],
}
</script>
<style lang="scss" scoped>

</style>