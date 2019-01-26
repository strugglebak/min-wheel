<template>
    <div class="tabs-pane"
        v-bind:class="tabsPaneClasses">
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
            align: ''
        }
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
    .tabs-pane {
        border: 1px solid green;
        flex-shrink: 0;
        width: 100%;
        &.align-horizontal {

        }
        &.align-vertical {

        }
    }
</style>