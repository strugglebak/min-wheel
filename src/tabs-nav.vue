<template>
    <div class="tabs-nav" ref="tabsNav"
        v-bind:class="tabsNavClasses">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MwTabsNav',
    inject: ['eventHub'],
    computed: {
        tabsNavClasses() {
            return {
                [this.align && `align-${this.align}`]: true,
            }
        }
    },
    data() {
        return {
            align: '',
        }
    },
    mounted() {
        this.eventHub.$on('update:selected', (selected, vm)=> {
            if (vm.disabled) { return }
        });

        this.eventHub.$on('update:position-changed', (position, vm)=> {
             if (position === 'top' || position === 'bottom') {
                 this.align = 'horizontal';
             } else if (position === 'left' || position === 'right') {
                this.align = 'vertical';
             } 
        });
    },
}
</script>
<style lang="scss" scoped>
    .tabs-nav {
        display: flex;
        border: 1px solid green;
        &.align-horizontal {
            flex-direction: row;
            justify-content: flex-start;
        }
        &.align-vertical {
            flex-direction: column;
            align-items: center;
        }
    }
</style>