<template>
    <div class="tabs-nav" ref="tabsNav"
        v-bind:class="tabsNavClasses">
        <div class="line" ref="line"></div>
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
                [this.linePosition && `line-${this.linePosition}`]: true,
            }
        },
    },
    methods: {
        getParentPosition() {
            let {left, top} = this.$parent.$el.getBoundingClientRect();
            this.parentLeft = left;
            this.parentTop = top;
        }
    },
    data() {
        return {
            align: '',
            parentLeft: 0,
            parentTop: 0,
            linePosition: '',
        }
    },
    mounted() {
        this.getParentPosition();
        this.eventHub.$on('update:selected', (selected, vm)=> {
            if (vm.disabled) { return }
            this.$nextTick(()=> {
                let {width, height, top, bottom, left, right} = vm.$el.getBoundingClientRect();
                console.log('width, height, top, bottom, left, right');
                console.log(width, height, top, bottom, left, right);
                if (this.align === 'horizontal') {
                    this.$refs.line.style.height = '2px';
                    this.$refs.line.style.width = `${width}px`;
                    this.$refs.line.style.left = `${left - this.parentLeft}px`;
                } else if (this.align === 'vertical') {
                    this.$refs.line.style.width = '2px';
                    this.$refs.line.style.height = `${height}px`;
                    this.$refs.line.style.top = `${top - this.parentTop}px`;
                }
            });
        });

        this.eventHub.$on('update:position-changed', (position, vm)=> {
            this.linePosition = position;
            
            // clear the line style which is very important !!!
            this.$refs.line.style = {};
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
        flex-shrink: 0;
        position: relative;
        > .line {
            border: 1px solid #1890ff;
            position: absolute;
            transition: all 0.3s;
        }
        &.align-horizontal {
            flex-direction: row;
            &.line-top {
                border-bottom: 1px solid #e8e8e8;
                > .line {
                    top: 100%;
                }
            }
            &.line-bottom {
                border-top: 1px solid #e8e8e8;
                > .line {
                    bottom: 100%;
                }
            }
        }
        &.align-vertical {
            flex-direction: column;
            &.line-left {
                border-right: 1px solid #e8e8e8;
                > .line {
                    left: 100%;
                }
            }
            &.line-right {
                border-left: 1px solid #e8e8e8;
                > .line {
                    right: 100%;
                }
            }
        }
    }
</style>