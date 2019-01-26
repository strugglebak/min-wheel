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
            align: 'horizontal',
        }
    },
    computed: {
        tabsItemClasses() {
            return {
                active: this.active,
                [`align-${this.align}`]: true,
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
            if (position === 'left' || position === 'right') {
                this.align = 'vertical';
            } else {
                this.align = 'horizontal';
            }
        });
    }
}
</script>
<style lang="scss" scoped>
    $tabs-item-height: 100%;
    $tabs-item-padding: 0 1em;
    .tabs-item {
        display: flex;  cursor: pointer;
        &[disabled] { color: #bbbbbb; cursor: not-allowed; }
        &.align-horizontal {
            padding: $tabs-item-padding; 
            height: $tabs-item-height;
            align-items: center;
        }
        &.align-vertical {
            padding: 1em 1em;
            width: 100%;
            justify-content: center;
        }
    }
</style>