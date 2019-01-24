<template>
    <div class="tabs-content" ref="tabsContent">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwTabsContent',
    inject: ['eventHub'],
    mounted() {
        let n = this.$refs.tabsContent.childElementCount;
        this.eventHub.$on('update:selected', (selected, vm)=> {
            this.$nextTick(()=> {
                let percent = (vm.order - 1) / n * 100;
                this.$refs.tabsContent.style.transform = `translateX(-${percent}%)`;
            });
        });
    },
}
</script>
<style lang="scss" scoped>
    .tabs-content {
        display: flex;
    }
</style>