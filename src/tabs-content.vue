<template>
    <div class="tabs-content" ref="tabsContent">
        <div class="tabs-pane-wrapper" ref="tabsPaneWrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MwTabsContent',
    inject: ['eventHub'],
    mounted() {
        this.eventHub.$on('update:selected', (selected, vm)=> {
            if (vm.disabled) { return }
            this.$nextTick(()=> {
                let percent = (vm.order - 1) * 100;
                this.$refs.tabsPaneWrapper.style.transform = `translateX(-${percent}%)`;
            });
        });
    },
}
</script>
<style lang="scss" scoped>
    $tabs-pane-wrapper-animation-delay: 0.45s;
    .tabs-content {
        overflow: hidden;
        > .tabs-pane-wrapper { display: flex; transition: all $tabs-pane-wrapper-animation-delay; }
    }
</style>