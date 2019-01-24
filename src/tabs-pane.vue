<template>
    <div class="tabs-pane"
        v-bind:class="tabsPaneClasses"
        >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwTabsPane',
    inject: ['eventHub'],
    props: {
        name: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            active: false
        }
    },
    computed: {
        tabsPaneClasses() {
            return {
                active: this.active
            }
        }
    },
    methods: {
    },
    created() {
        this.eventHub.$on('update:selected', (selected, vm)=> {
            this.active = (this.name === selected);
        });
    }
}
</script>
<style lang="scss" scoped>
    .tabs-pane {
        padding: 20px 0;
        flex-grow: 1;
        flex-shrink: 0;
        opacity: 0;
        &.active {
            opacity: 1;
        }
        transition: opacity 0.45s;
    }
</style>