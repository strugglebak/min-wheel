<template>
    <div class="collapse">
        <slot></slot>
    <span>{{selected}}</span>
    </div>   
</template>
<script>
import Vue from 'vue'
export default {
    name: 'MwCollapse',
    props: {
        accordion: {
            type: Boolean,
            default: false,
        },
        selected: {
            type: String,
        }
    },
    methods: {
        findItemElement() {
        let vm;
        this.$children.forEach((element) => {
            if ( element && element.$options.name === 'MwCollapseItem'
                && this.selected === element.name ) {
                    vm = element;
            }
        });
        return vm;
    },
    },
    data() {
        return {eventHub: new Vue(),}
    },
    provide() {
        return this.accordion ? { eventHub: this.eventHub } : { eventHub: undefined } 
    },
    mounted() {
        if (!this.eventHub || !this.selected) { return }
        let vm = this.findItemElement();
        this.eventHub.$on('update:selected', (vm, name)=> {
            this.$emit('update:selected', name);
        });
        this.eventHub.$emit('update:selected', vm, this.selected);
    }
}
</script>
<style lang="scss" scoped>
    .collapse {
    }
</style>
