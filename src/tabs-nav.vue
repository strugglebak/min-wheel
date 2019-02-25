<template>
    <div class="tabs-nav" ref="tabsNav"
        v-bind:class="tabsNavClasses">
        <div class="line" ref="line"></div>
        <slot></slot>
        <div class="actions-wrapper"
            v-if="extra">
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
                [this.linePosition && `line-${this.linePosition}`]: true,
            }
        },
    },
    methods: {
        clearLineStyle() {
            this.$refs.line.style = {};
        },
        updateLineStyleInHorizontal(vm) {
            if (!this.$refs.line) { return }
            let {width} = vm.$el.getBoundingClientRect();
            let marginRight = getComputedStyle(vm.$el)['marginRight'].split('px')[0];
            let style = this.$refs.line.style;
            style.transitionProperty = 'left';
            style.height = '2px';
            style.width = `${width}px`;
            let order = parseInt(vm.order - 1);
            let offset = parseInt(width) + parseInt(marginRight);
            let left = order * offset;
            style.left = `${left}px`;
        },
        updateLineStyleInVertical(vm) {
            if (!this.$refs.line) { return }
            let {height} = vm.$el.getBoundingClientRect();
            let marginBottom = getComputedStyle(vm.$el)['marginBottom'].split('px')[0];
            let style = this.$refs.line.style;
            style.transitionProperty = 'top';
            style.width = '2px';
            style.height = `${height}px`;
            let order = parseInt(vm.order - 1);
            let offset = parseInt(height) + parseInt(marginBottom);
            let top = order * offset;
            style.top = `${top}px`;
        },
        updateLineStyle(vm) {
            if (vm.disabled) { return }
            this.$nextTick(()=> {
                if (this.align === 'horizontal') { this.updateLineStyleInHorizontal(vm); } 
                else if (this.align === 'vertical') { this.updateLineStyleInVertical(vm); }
            });
        },
        listenPositionChanged() {
            this.eventHub.$on('update:position-changed', (position, vm)=> {
                this.linePosition = position;
                let container = {
                    'top': 'horizontal', 'bottom': 'horizontal',
                    'left': 'vertical', 'right': 'vertical'
                };
                this.align = container[position];
                this.extra = this.$parent.enableExtra;
                this.clearLineStyle();
                this.updateLineStyle(vm);
            });
        },
        listenTabSelected() {
            this.eventHub.$on('update:selected', (selected, vm)=> {
                this.updateLineStyle(vm);
            });
        }
    },
    data() {
        return { align: '', linePosition: '', extra: false, }
    },
    mounted() {
        this.listenPositionChanged();
        this.listenTabSelected();
    },
}
</script>
<style lang="scss" scoped>
    $tabs-nav-line-color: #41b883;
    $tabs-nav-line-animation-delay: 0.3s;
    $tabs-nav-border-color: #e8e8e8;
    .tabs-nav {
        display: flex; flex-shrink: 0; position: relative;
        > .line { border: 1px solid $tabs-nav-line-color; position: absolute; transition-duration: $tabs-nav-line-animation-delay; }

        &.align-horizontal { flex-direction: row; 
            &.line-top { border-bottom: 1px solid $tabs-nav-border-color;
                > .line { top: 100%; }
            }
            &.line-bottom { border-top: 1px solid $tabs-nav-border-color;
                > .line { bottom: 100%; }
            }
            > .actions-wrapper { margin-left: auto; }
        }

        &.align-vertical { flex-direction: column; 
            &.line-left { border-right: 1px solid $tabs-nav-border-color;
                > .line { left: 100%; }
            }
            &.line-right { border-left: 1px solid $tabs-nav-border-color;
                > .line { right: 100%; }
            }
            > .actions-wrapper { display: flex; justify-content: flex-end; padding-right: 1em; }
        }
    }
</style>