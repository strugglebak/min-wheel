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
        if (this.accordion) {
            return { eventHub: this.eventHub };
        }
    },
}
</script>
<style lang="scss" scoped>
    .collapse {
    }
</style>
