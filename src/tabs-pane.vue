<template>
    <div class="tabs-pane"
        v-bind:class="tabsPaneClasses"
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
                console.log('tabs pane 监听到了 position changed 事件');
                this.active = (this.name === vm.name)
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
        },
    },
    created() {
        this.listenTabSelected();
        this.listenPositionChanged();
    }
}
</script>
<style lang="scss" scoped>
    .tabs-pane {
        flex-shrink: 0; width: 100%;
        &.align-horizontal { padding: 1.5em 0; }
        &.align-vertical { padding: 0 1.5em; }
    }
</style>