<template>
    <div class="tabs-nav" ref="tabsNav"
        v-bind:class="tabsNavClasses">
        <div class="line" ref="line"></div>
        <div class="tabs-item-wrapper" ref="tabsItemWrapper">
            <slot></slot>
        </div>
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
        getOffset() {
            let firstChild = this.$children[0].$el;
            let offset = 0;
            if (firstChild) {
                if (this.align === 'vertical-left' || this.align === 'vertical-right') {
                    offset = firstChild.getBoundingClientRect().top;
                } else if(this.align === 'horizontal') {
                    offset = firstChild.getBoundingClientRect().left;
                }
            }
            return offset;
        },
        tabsNavClasses() {
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
        this.eventHub.$on('update:selected', (selected, vm)=> {
            if (vm.disabled) { return }
            this.$nextTick(()=> {
                let {height, top, width, left} = vm.$el.getBoundingClientRect();
                if (this.align === 'vertical-left' || this.align === 'vertical-right') {
                    this.$refs.line.style.height = `${height}px`;
                    this.$refs.line.style.top = `${top - this.getOffset}px`;
                } else if (this.align === 'horizontal') {
                    this.$refs.line.style.width = `${width}px`;
                    this.$refs.line.style.left = `${left - this.getOffset}px`;
                }
            });
        });

        this.eventHub.$on('update:position-changed', (position, vm)=> {
             if (position === 'left' || position === 'right') {
                this.align = `vertical-${position}`;
             } else {
                 this.align = 'horizontal';
             }
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
        flex-shrink: 0;
        &.align-horizontal {
            display: flex; 
            align-items: center;
            height: $tabs-nav-height; border-bottom: 1px solid $tabs-nav-border-color;
            position: relative;

            > .tabs-item-wrapper {
                display: flex;
                justify-content: flex-start; align-items: center;
            }
            > .line { position: absolute; top: 100%; border-bottom: 2px solid $tabs-nav-line-color; transition: all $tabs-nav-animation-delay; }
            > .actions-wrapper { margin-left: auto; }
        }

        &.align-vertical-left {
            display: flex;
            border-right: 1px solid $tabs-nav-border-color;
            position: relative;
            > .tabs-item-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
            > .line {
                position: absolute;
                left: 100%;
                border-right: 2px solid $tabs-nav-line-color;
                transition: all $tabs-nav-animation-delay;
            }
            > .actions-wrapper {
                margin-bottom: auto;
            }
        }

        &.align-vertical-right {
            display: flex;
            border-left: 1px solid $tabs-nav-border-color;
            position: relative;
            > .tabs-item-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
            > .line {
                position: absolute;
                right: 100%;
                border-left: 2px solid $tabs-nav-line-color;
                transition: all $tabs-nav-animation-delay;
            }
            > .actions-wrapper {
                margin-bottom: auto;
            }
        }
    }
</style>