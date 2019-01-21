<template>
    <div class="layout"
        v-bind:class="insideLayout">
        <slot></slot>
    </div>   
</template>
<script>
export default {
   name: 'MwLayout',
   data() {
       return {
           insideLayout: { hasSider: false, hasContent: false, }
       }
   },
   mounted() {
       this.$children.forEach((vm)=> {
           if (vm.$options.name === 'MwSider') {
               this.insideLayout.hasSider = true;
           }
           if (vm.$options.name === 'MwContent') {
               this.insideLayout.hasContent = true;
           }
       })
   },
}
</script>
<style lang="scss" scoped>
    .layout {
        display: flex; flex-direction: column; flex-grow: 1;
        &.hasSider { flex-direction: row;
            > .sider { flex-grow: 0.25; }
            &.hasContent 
                > .content { flex-grow: 0.75; }
        }
    }
</style>
