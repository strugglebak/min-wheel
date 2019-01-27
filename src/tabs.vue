<template>
    <div class="tabs" ref="tabs"
        v-bind:class="tabsClasses">
        <slot></slot>
    </div>
</template>
<script>
import EventHub from '../plugins/eventHub-plugin.js'

export default {
    name: 'MwTabs',
    props: {
        selected: { type: String, required: true },
        tabsPosition: { type: String, default: 'top',
            validator: function(value) {
                return ['top', 'bottom', 'left', 'right'].includes(value);
            }
        }
    },
    computed: {
        tabsClasses() {
            return {
                [this.align && `align-${this.align}`]: true,
            }
        },
    },
    methods: {
        listenPositionChanged() {
            this.eventHub.$on('update:position-changed', (position, vm)=> {
                let container = {
                    'top': 'vertical', 'bottom': 'vertical-reverse', 
                    'left': 'horizontal', 'right': 'horizontal-reverse'
                };
                this.align = container[position];
            });
        },
        findItemElement() {
            let vm;
            this.$children.forEach((element) => {
                if (element && element.$options.name === 'MwTabsNav') {
                    element.$children.forEach((elementChild)=> {
                        if (elementChild.$options.name === 'MwTabsItem' && this.selected === elementChild.name) {
                            vm = elementChild;
                        }
                    })
                }
            });
            return vm;
        },
        emitSignal(vm) {
            this.eventHub.$emit('update:position-changed', this.tabsPosition, vm);
        },
    },
    data() {
        return { eventHub: EventHub, align: '' }
    },
    provide() {
        return  { eventHub: this.eventHub }
    },
    mounted() {
        this.listenPositionChanged();
        let vm = this.findItemElement();
        this.emitSignal(vm);
    }
}
</script>
<style lang="scss" scoped>
    .tabs { 
        padding: 2em 1.5em;
        border: 1px solid #1890ff;  
        display: flex;
        &.align-vertical { flex-direction: column; }
        &.align-vertical-reverse { flex-direction: column-reverse; }
        &.align-horizontal { flex-direction: row; }
        &.align-horizontal-reverse { flex-direction: row-reverse; }
    }
</style>