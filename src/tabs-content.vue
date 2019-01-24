<template>
    <div class="tabs-content" ref="tabsContent">
        <div class="wrapper" ref="wrapper">
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
            this.$nextTick(()=> {
                let percent = (vm.order - 1) * 100;
                this.$refs.wrapper.style.transform = `translateX(-${percent}%)`;
            });
        });
    },
}
</script>
<style lang="scss" scoped>
    .tabs-content {
        overflow: hidden;
        > .wrapper {
            display: flex;
            transition: all 0.45s;
        }
    }
</style>