<template>
    <div class="tabs-item" 
        v-bind:class="tabsItemClasses"
        v-bind:disabled="disabled"
        v-on:click="onclick">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwTabsItem',
    inject: ['eventHub'],
    props: {
        name: {
            type: String,
            required: true
        },
        order: {
            type: [Number, String],
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            active: false,
            align: '',
        }
    },
    computed: {
        tabsItemClasses() {
            return {
                active: this.active,
                [this.align && `align-${this.align}`]: true,
            }
        }
    },
    methods: {
        onclick() {
            this.eventHub.$emit('update:selected', this.name, this);
        }
    },
    created() {
        this.eventHub.$on('update:selected', (selected, vm)=> {
            this.active = (this.name === selected);
        });
        this.eventHub.$on('update:position-changed', (position, vm)=> {
             if (position === 'top' || position === 'bottom') {
                 this.align = 'horizontal';
             } else if (position === 'left' || position === 'right') {
                this.align = 'vertical';
             } 
        });
    }
}
</script>
<style lang="scss" scoped>
    .tabs-item {
        border: 1px solid red;
        padding: 0.8em 1em;
        cursor: pointer;
        &.align-horizontal {
            &:not(:first-child) {
                margin-left: 2em;
            }
        }
        &.align-vertical {

        }
    }
</style>