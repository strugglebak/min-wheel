<template>
    <div class="tabs-nav">
        <div class="line" ref="line"></div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwTabsNav',
    inject: ['eventHub'],
    computed: {
        getOffset() {
            let firstChild = this.$children[0].$el;
            let offset = 0;
            if (firstChild) {
                offset = firstChild.getBoundingClientRect().left;
            }
            return offset;
        },
    },
    mounted() {
        this.eventHub.$on('update:selected', (selected, vm)=> {
            if (vm.disabled) { return }
            let {width, left} = vm.$el.getBoundingClientRect();
            let offset = this.getOffset;
            left = left - offset;
            this.$refs.line.style.width = `${width}px`;
            this.$refs.line.style.left = `${left}px`;
        });
    },
}
</script>
<style lang="scss" scoped>
    $tabs-nav-height: 40px;
    $tabs-nav-border-color: #e8e8e8;
    $tabs-nav-line-color: #1890ff;
    $tabs-nav-animation-delay: 0.3s;
    .tabs-nav {
        display: flex; justify-content: flex-start; align-items: center;
        height: $tabs-nav-height; border-bottom: 1px solid $tabs-nav-border-color;
        position: relative;

        > .line { position: absolute; top: 100%; border-bottom: 2px solid $tabs-nav-line-color; transition: all $tabs-nav-animation-delay; }
    }
</style>