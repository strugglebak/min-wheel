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
        // this.eventHub.$emit('update:selected', this.selected);
        this.$children.forEach((element) => {
           if (element && element.$options.name === 'MwTabsNav') {
               element.$children.forEach((elementChild)=> {
                   if (elementChild.$options.name === 'MwTabsItem' && this.selected === elementChild.name) {
                        this.eventHub.$emit('update:selected', this.selected, elementChild);
                   }
               })
           }
        });
    }
}
</script>
<style lang="scss" scoped>
    .tabs {
        border: 1px solid #ebedf0;
        padding: 0 24px;
    }
</style>