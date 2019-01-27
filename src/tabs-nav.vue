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
import 'babel-polyfill'
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
            let {width, left} = vm.$el.getBoundingClientRect();
            this.$refs.line.style.transitionProperty = 'left';
            this.$refs.line.style.height = '2px';
            this.$refs.line.style.width = `${width}px`;
            this.$refs.line.style.left = `${left - this.parentLeft - this.parentPaddingLeft}px`;
        },
        updateLineStyleInVertical(vm) {
            let {height, top} = vm.$el.getBoundingClientRect();
            this.$refs.line.style.transitionProperty = 'top';
            this.$refs.line.style.width = '2px';
            this.$refs.line.style.height = `${height}px`;
            this.$refs.line.style.top = `${top - this.parentTop - this.parentPaddingTop}px`;
        },
        updateLineStyle(vm) {
            if (vm.disabled) { return }
            this.$nextTick(()=> {
                if (this.align === 'horizontal') { this.updateLineStyleInHorizontal(vm); } 
                else if (this.align === 'vertical') { this.updateLineStyleInVertical(vm); }
            });
        },
        timeout(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        },
        async asyncGetParentStyle(ms=5, element) {
            let style = getComputedStyle(this.$parent.$el);
            let {left, top} = this.$parent.$el.getBoundingClientRect();
            await this.timeout(ms);
            this.parentLeft = left;
            this.parentTop = top;
            this.parentPaddingLeft = style['paddingLeft'].split('px')[0];
            this.parentPaddingTop = style['paddingTop'].split('px')[0];
            this.updateLineStyle(element);
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
                this.asyncGetParentStyle(3, vm);
            });
        },
        listenTabSelected() {
            this.eventHub.$on('update:selected', (selected, vm)=> {
                this.updateLineStyle(vm);
            });
        }
    },
    data() {
        return {
            align: '',
            parentLeft: 0, parentTop: 0,
            parentPaddingLeft: 0, parentPaddingTop: 0,
            linePosition: '',
            extra: false,
        }
    },
    mounted() {
        this.listenPositionChanged();
        this.listenTabSelected();
    },
}
</script>
<style lang="scss" scoped>
    .tabs-nav {
        display: flex; flex-shrink: 0; position: relative;
        > .line { border: 1px solid #1890ff; position: absolute; transition-duration: 0.3s; }

        &.align-horizontal { flex-direction: row;
            &.line-top { border-bottom: 1px solid #e8e8e8;
                > .line { top: 100%; }
            }
            &.line-bottom { border-top: 1px solid #e8e8e8;
                > .line { bottom: 100%; }
            }
            > .actions-wrapper {
                margin-left: auto;
            }
        }

        &.align-vertical { flex-direction: column;
            &.line-left { border-right: 1px solid #e8e8e8;
                > .line { left: 100%; }
            }
            &.line-right { border-left: 1px solid #e8e8e8;
                > .line { right: 100%; }
            }
            > .actions-wrapper {
                display: flex;
                justify-content: flex-end;
                padding-right: 1em;
            }
        }
    }
</style>