<template>
    <div class="tabs" ref="tabs"
        v-bind:class="tabsClasses">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
    name: 'MwTabs',
    props: {
        selected: { type: String, required: true },
        positionChanged: { type: String, default: 'top',
            validator: function(value) {
                return ['top', 'bottom', 'left', 'right'].includes(value);
            }
        },
        enableExtra: { type: Boolean, default: false }
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
                        if (elementChild.$options.name === 'MwTabsItem' 
                                && this.selected === elementChild.name) {
                            vm = elementChild;
                        }
                    })
                }
            });
            return vm;
        },
        emitSignal(vm) {
            this.eventHub.$emit('update:position-changed', this.positionChanged, vm);
        },
    },
    data() {
        return { eventHub: new Vue(), align: '' }
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
    $tabs-border-color: #41b883;
    .tabs { 
        padding: 2em 1.5em;
        border: 1px solid $tabs-border-color;  
        display: flex;
        &.align-vertical { flex-direction: column; }
        &.align-vertical-reverse { flex-direction: column-reverse; }
        &.align-horizontal { flex-direction: row; }
        &.align-horizontal-reverse { flex-direction: row-reverse; }
    }
</style>