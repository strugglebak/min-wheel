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
        selected: {
            type: String,
            required: true
        },
        tabsPosition: {
            type: String,
            default: 'top',
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
    data() {
        return {
            eventHub: EventHub,
            align: ''
        }
    },
    provide() {
        return  {
            eventHub: this.eventHub
        }
    },
    mounted() {
        this.eventHub.$on('update:position-changed', (position, vm)=> {
            if (position === 'top') {
                this.align = 'vertical';
            } else if (position === 'bottom') {
                this.align = 'vertical-reverse';
            } else if (position === 'left') {
                this.align = 'horizontal';
            } else if (position === 'right') {
                this.align = 'horizontal-reverse';
            }
        });

        this.$children.forEach((element) => {
           if (element && element.$options.name === 'MwTabsNav') {
               element.$children.forEach((elementChild)=> {
                   if (elementChild.$options.name === 'MwTabsItem' && this.selected === elementChild.name) {
                        this.eventHub.$emit('update:position-changed', this.tabsPosition, elementChild);
                        this.eventHub.$emit('update:selected', this.selected, elementChild);
                   }
               })
           }
        });
    }
}
</script>
<style lang="scss" scoped>
    .tabs { 
        border: 1px solid #1890ff;  
        display: flex;
        &.align-vertical {
            flex-direction: column;
            padding: 3em 2em;
        }
        &.align-vertical-reverse {
            flex-direction: column-reverse;
            padding: 3em 2em;
        }
        &.align-horizontal {
            flex-direction: row;
            padding: 2em 1.5em;
        }
        &.align-horizontal-reverse {
            flex-direction: row-reverse;
            padding: 2em 1.5em;
        }
    }
</style>