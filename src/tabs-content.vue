<template>
    <div class="tabs-content" ref="tabsContent">
        <div class="tabs-pane-wrapper" ref="tabsPaneWrapper"
            v-bind:class="tabsPaneWrapperClasses">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MwTabsContent',
    inject: ['eventHub'],
    computed: {
        tabsPaneWrapperClasses() {
            return {
                [`align-${this.align}`]: true,
            }
        }
    },
    data() {
        return {
            align: 'horizontal',
        }
    },
    mounted() {
        let n = this.$children.length;
        this.eventHub.$on('update:selected', (selected, vm)=> {
            if (vm.disabled) { return }
            this.$nextTick(()=> {
                if (this.align === 'horizontal') {
                    let percent = (vm.order - 1) * 100;
                    this.$refs.tabsPaneWrapper.style.transform = `translateX(-${percent}%)`;
                }            
            });
        });

        this.eventHub.$on('update:position-changed', (position, vm)=> {
            if (position === 'left' || position === 'right') {
                this.align = 'vertical';
            } else {
                this.align = 'horizontal';
            }      
        });
    },
}
</script>
<style lang="scss" scoped>
    $tabs-pane-wrapper-animation-delay: 0.45s;
    .tabs-content {
        width: 100%;
        overflow: hidden;
        > .tabs-pane-wrapper { 
            display: flex; transition: all $tabs-pane-wrapper-animation-delay;
            &.align-horizontal {
                flex-direction: row;  
            }
            &.align-vertical {
                flex-direction: column;
            }
        }
    }
</style>