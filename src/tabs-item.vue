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
        },
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
            this.eventHub.$emit('update:selected', this.name);
        }
    },
    created() {
        this.eventHub.$on('update:selected', (selected)=> {
            this.active = (this.name === selected);
        });
    }
}
</script>
<style lang="scss" scoped>
    .tabs-item {
        cursor: pointer;
        &.active {
            border: 1px solid red;
        }
    }
</style>