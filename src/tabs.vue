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
                [`align-${this.align}`]: true,
            }
        },
    },
    data() {
        return {
            eventHub: EventHub,
            align: 'vertical'
        }
    },
    provide() {
        return  {
            eventHub: this.eventHub
        }
    },
    mounted() {
        this.eventHub.$on('update:position-changed', (position, vm)=> {
            if (position === 'left') {
                this.$refs.tabs.style.flexDirection = 'row';
                this.align = 'horizontal';
            } else if (position === 'right') {
                this.$refs.tabs.style.flexDirection = 'row-reverse';
                this.align = 'horizontal';
            } else if (position === 'bottom') {
                this.$refs.tabs.style.flexDirection = 'column-reverse';
            } else if (position === 'top') {
                this.$refs.tabs.style.flexDirection = 'column';
            }
        });

        this.$children.forEach((element) => {
           if (element && element.$options.name === 'MwTabsNav') {
               element.$children.forEach((elementChild)=> {
                   if (elementChild.$options.name === 'MwTabsItem' && this.selected === elementChild.name) {
                        this.eventHub.$emit('update:selected', this.selected, elementChild);
                        this.eventHub.$emit('update:position-changed', this.tabsPosition, elementChild);
                   }
               })
           }
        });
    }
}
</script>
<style lang="scss" scoped>
    $tabs-border-color: #ebedf0;
    $tabs-vertical-padding: 0 24px;
    $tabs-horizontal-padding: 24px 0;
    .tabs { 
        border: 1px solid $tabs-border-color;  
        display: flex;
        &.align-horizontal {
            padding: $tabs-horizontal-padding;
        }
        &.align-vertical {
            padding: $tabs-vertical-padding;
        }
    }
</style>