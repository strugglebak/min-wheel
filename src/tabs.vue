<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'MwTabs',
    props: {
        selected: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            eventHub: new Vue()
        }
    },
    provide() {
        return  {
            eventHub: this.eventHub
        }
    },
    mounted() {
        this.eventHub.$emit('update:selected', this.selected);
    }
}
</script>
<style lang="scss" scoped>

</style>