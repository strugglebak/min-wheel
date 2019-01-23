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
    mounted() {
        this.eventHub.$on('update:selected', (selected, vm)=> {
            let {width, left} = vm.$el.getBoundingClientRect();
            console.log(vm.$el.getBoundingClientRect());
            this.$refs.line.style.width = `${width}px`;
            this.$refs.line.style.left = `${left}px`;
        });
    },
}
</script>
<style lang="scss" scoped>
    .tabs-nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid #e8e8e8;
        position: relative;

        > .line {
            position: absolute;
            top: 100%;
            border-bottom: 2px solid #1890ff;
            transition: all 0.3s;
        }
    }
</style>