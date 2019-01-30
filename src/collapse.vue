<template>
    <div class="collapse">
        <slot></slot>
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
        }
    },
    data() {
        return {eventHub: new Vue(),}
    },
    provide() {
        return this.accordion ? { eventHub: this.eventHub} : { eventHub: undefined } 
    },
}
</script>
<style lang="scss" scoped>
    .collapse {
    }
</style>
