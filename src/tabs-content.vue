<template>
    <div class="tabs-content" ref="tabsContent"
        v-bind:class="tabsContentClasses">
        <div class="tabs-pane-wrapper" ref="tabsPaneWrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MwTabsContent',
    inject: ['eventHub'],
    computed: {
        tabsContentClasses() {
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
    $tabs-pane-wrapper-animation-delay: 0.45s;
    .tabs-content {
        border: 1px solid blue;
        overflow: hidden;
        width: 100%;
        > .tabs-pane-wrapper {
            display: flex;
            border: 1px solid red;
        }

        &.align-horizontal {
            > .tabs-pane-wrapper {
                flex-direction: row;
            }
        }
        &.align-vertical {
            > .tabs-pane-wrapper {
                flex-direction: column;
            }
        }
    }
</style>