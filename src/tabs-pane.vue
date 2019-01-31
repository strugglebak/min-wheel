<template>
    <div class="tabs-pane"
        v-bind:class="tabsPaneClasses" v-bind:data-name="name"
        v-if="align && align === 'horizontal'">
        <slot></slot>
    </div>
    <div class="tabs-pane"
        v-bind:class="tabsPaneClasses"
        v-else-if="(align && align === 'vertical') && active">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwTabsPane',
    inject: ['eventHub'],
    props: {
        name: { type: String, required: true },
    },
    data() {
        return { active: false, align: '' }
    },
    computed: {
        tabsPaneClasses() {
            return {
                active: this.active,
                [this.align && `align-${this.align}`]: true,
            }
        }
    },
    methods: {
        listenPositionChanged() {
            this.eventHub.$on('update:position-changed', (position, vm)=> {
                this.active = (this.name === vm.name);
                let container = {
                        'top': 'horizontal', 'bottom': 'horizontal',
                        'left': 'vertical', 'right': 'vertical'
                    };
                this.align = container[position];
            });
        },
        listenTabSelected() {
            this.eventHub.$on('update:selected', (selected, vm)=> {
                if (vm.disabled) {return}
                this.active = (this.name === selected);
            });
        },
    },
    created() {
        this.listenTabSelected();
        this.listenPositionChanged();
    }
}
</script>
<style lang="scss" scoped>
    $tabs-pane-width: 100%;
    $tabs-pane-align-horizontal-padding: 1.5em 0;
    $tabs-pane-align-vertical-padding: 0 1.5em;
    .tabs-pane {
        flex-shrink: 0; width: $tabs-pane-width;
        &.align-horizontal { padding: $tabs-pane-align-horizontal-padding }
        &.align-vertical { padding: $tabs-pane-align-vertical-padding }
    }
</style>