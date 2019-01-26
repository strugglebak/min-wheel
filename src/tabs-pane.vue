<template>
    <div class="tabs-pane"
        v-bind:class="tabsPaneClasses"
        v-if="align === 'vertical' && active">
        <slot></slot>
    </div>
    <div class="tabs-pane"
        v-bind:class="tabsPaneClasses"
        v-else-if="align === 'horizontal'">
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
            active: false,
            align: 'horizontal'
        }
    },
    computed: {
        tabsPaneClasses() {
            return {
                active: this.active,
                [`align-${this.align}`]: true,
            }
        }
    },
    methods: {
    },
    created() {
        this.eventHub.$on('update:selected', (selected, vm)=> {
            this.active = (this.name === selected);
        });
        this.eventHub.$on('update:position-changed', (position, vm)=> {
            if (position === 'left' || position === 'right') {
                this.align = 'vertical';
            }
        });
    }
}
</script>
<style lang="scss" scoped>
    $tabs-pane-padding: 1em 0;
    $tabs-pane-width: 100%;
    $tabs-pane-flex-shrink: 0;
    .tabs-pane {
        &.align-horizontal {
            flex-shrink: $tabs-pane-flex-shrink;
            padding: $tabs-pane-padding;
            width: $tabs-pane-width;
        }
        &.align-vertical {
            /*TODO*/
            padding: 0 1em;
        }
    }
</style>