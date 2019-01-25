<template>
    <div class="tabs-item" 
        v-bind:class="tabsItemClasses"
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
        }
    },
    data() {
        return {
            active: false 
        }
    },
    computed: {
        tabsItemClasses() {
            return {
                active: this.active,
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
    }
}
</script>
<style lang="scss" scoped>
    $tabs-item-height: 100%;
    $tabs-item-padding: 0 1em;
    .tabs-item {
        display: flex; align-items: center; cursor: pointer;
        padding: $tabs-item-padding; height: $tabs-item-height;
    }
</style>