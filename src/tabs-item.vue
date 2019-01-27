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
            position: '',
        }
    },
    computed: {
        tabsItemClasses() {
            return {
                active: this.active,
                [this.align && `align-${this.align}`]: true,
                [this.position && `text-${this.position}`]: true,
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
            // if (this.active) {
            //     this.eventHub.$emit('update:selected', this.name, this);
            // }
            this.position = position;
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
        cursor: pointer;
        display: flex;
        &.align-horizontal {
            padding: 0.8em 1em;
            margin-right: 2em;
        }
        &.align-vertical {
            padding: 0.5em 1.5em;
            margin-bottom: 1em;
            &.text-left {
                justify-content: flex-end;
            }
            &.text-right {
                justify-content: flex-start;
            }
        }
    }
</style>