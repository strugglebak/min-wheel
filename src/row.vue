<template>
    <div class="row" 
        v-bind:style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
   name: 'MwRow', 
   props: {
       ditch: { type: [Number, String] }
   },
   computed: {
       rowStyle() {
           let {ditch} = this;
           return {
               marginLeft: -ditch/2 + 'px', 
               marginRight: -ditch/2 + 'px'
           }
       }
   },
   mounted() {
       // 将 ditch 值 传给子组件 col
       this.$children.forEach((vm) => {
           vm.ditch = this.ditch;
       })
   }
}
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>