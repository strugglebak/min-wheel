<template>
    <div class="tabs-item" 
        v-bind:class="tabsItemClasses"
        v-bind:disabled="disabled"
        v-on:click="onclick" v-bind:data-name="name">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwTabsItem',
    inject: ['eventHub'],
    props: {
        name: { type: String, required: true },
        order: { type: [Number, String], required: true, },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return { active: false, align: '', position: '', }
    },
    computed: {
        tabsItemClasses() {
            return {
                active: this.active,
                disabled: this.disabled,
                [this.align && `align-${this.align}`]: true,
                [this.position && `text-${this.position}`]: true,
            }
        }
    },
    methods: {
        onclick() {
            this.eventHub.$emit('update:selected', this.name, this);
        },
        listenPositionChanged() {
            this.eventHub.$on('update:position-changed', (position, vm)=> {
                this.active = (this.name === vm.name);
                this.position = position;
                let container = {
                    'top': 'horizontal', 'bottom': 'horizontal',
                    'left': 'vertical', 'right': 'vertical'
                };
                this.align = container[position];
            });
        },
        listenTabSelected() {
            this.eventHub.$on('update:selected', (selected, vm)=> {
                this.active = (this.name === selected);
            });
        }
    },
    created() {
        this.listenTabSelected();
        this.listenPositionChanged();
    }
}
</script>
<style lang="scss" scoped>
    $tabs-item-color-animation-delay: 0.3s;
    $tabs-item-active-color: #1890ff;
    $tabs-item-hover-color: #40a9ff;
    $tabs-item-align-horizontal-padding: 0.8em 1em;
    $tabs-item-align-horizontal-margin-right: 2em;
    $tabs-item-align-vertical-padding: 0.5em 1.5em;
    $tabs-item-align-vertical-margin-bottom: 1em;
    .tabs-item {
        cursor: pointer; display: flex; transition: color $tabs-item-color-animation-delay; 
        &.active { color: $tabs-item-active-color; }
        &:hover { color:  $tabs-item-hover-color}
        &.align-horizontal { padding: $tabs-item-align-horizontal-padding; margin-right: $tabs-item-align-horizontal-margin-right; }
        &.align-vertical { padding: $tabs-item-align-vertical-padding; margin-bottom: $tabs-item-align-vertical-margin-bottom;
            &.text-left { justify-content: flex-end; }
            &.text-right { justify-content: flex-start; }
        }
        &[disabled]{ color: #bbbbbb; cursor: not-allowed; } 
    }
</style>