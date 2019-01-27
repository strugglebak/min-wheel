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
            return { [this.align && `align-${this.align}`]: true, }
        }
    },
    methods: {
        clearTabsPaneWrapperStyle() {
            this.$refs.tabsPaneWrapper.style.transform = '';
            this.$refs.tabsPaneWrapper.style.transitionProperty = '';
        },
        listenPositionChanged() {
            this.eventHub.$on('update:position-changed', (position, vm)=> {
                this.clearTabsPaneWrapperStyle();
                let container = {
                    'top': 'horizontal', 'bottom': 'horizontal',
                    'left': 'vertical', 'right': 'vertical'
                };
                this.align = container[position];
            });
        },
        listenTabSelected() {
            let n = this.$children.length;
            this.eventHub.$on('update:selected', (selected, vm)=> {
                if (vm.disabled) { return }
                this.$nextTick(()=> {
                    if (!this.$refs.tabsPaneWrapper) {return}
                    if (this.align === 'horizontal') {
                        let percent = (vm.order - 1) * 100;
                        this.$refs.tabsPaneWrapper.style.transform = `translateX(-${percent}%)`;
                        this.$refs.tabsPaneWrapper.style.transitionProperty = 'transform';
                    }            
                });
            });
        }
    },
    data() {
        return { align: '', }
    },
    mounted() {
        this.listenTabSelected();
        this.listenPositionChanged();
    },
}
</script>
<style lang="scss" scoped>
    $tabs-content-width: 100%;
    $tabs-content-animation-delay: 0.45s;
    .tabs-content {
        overflow: hidden; width: $tabs-content-width;
        > .tabs-pane-wrapper { display: flex; transition-duration: $tabs-content-animation-delay }

        &.align-horizontal {
            > .tabs-pane-wrapper { flex-direction: row; }
        }
        &.align-vertical {
            > .tabs-pane-wrapper { flex-direction: column; }
        }
    }
</style>