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
        listenPositionChanged() {
            this.eventHub.$on('update:position-changed', (position, vm)=> {
                this.$refs.tabsPaneWrapper.style = {};
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
                    if (this.align === 'horizontal') {
                        let percent = (vm.order - 1) * 100;
                        this.$refs.tabsPaneWrapper.style.transform = `translateX(-${percent}%)`;
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
    .tabs-content {
        overflow: hidden; width: 100%;
        > .tabs-pane-wrapper { display: flex; transition: all 0.45s; }

        &.align-horizontal {
            > .tabs-pane-wrapper { flex-direction: row; }
        }
        &.align-vertical {
            > .tabs-pane-wrapper { flex-direction: column; }
        }
    }
</style>