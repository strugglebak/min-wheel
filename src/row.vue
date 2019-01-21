<template>
    <div class="row" 
        v-bind:class="rowClass"
        v-bind:style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
   name: 'MwRow', 
   props: {
       ditch: { type: [Number, String] },
       alignment: {
           type: String, 
           validator: function(value) {
               return ['left', 'center', 'right'].includes(value);
           }
       },
   },
   computed: {
       rowClass() {
           let {alignment} = this;
           return [alignment && `align-${alignment}`];
       },
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
        &.align-left { justify-content: flex-start; }
        &.align-center { justify-content: center; }
        &.align-right { justify-content: flex-end; }
    }
</style>