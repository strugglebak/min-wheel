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
    data() {
        return {eventHub: new Vue(),}
    },
    provide() {
        return this.accordion ? { eventHub: this.eventHub } : { eventHub: undefined } 
    },
    mounted() {
        if (!this.eventHub) { return }
        this.eventHub.$on('update:selected', (name)=> {
            this.$emit('update:selected', name);
        })
        this.eventHub.$emit('update:selected', this.selected);
    }
}
</script>
<style lang="scss" scoped>
    .collapse {
    }
</style>
