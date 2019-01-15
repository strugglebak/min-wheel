<template>
   <svg v-if="name" class="mw-icon">
       <use v-bind:xlink:href="`#icon-${name}`"></use>
   </svg> 
</template>
<script>
import './svg.js'
export default {
    name: "MwIcon",
    props: ['name']
}
</script>
<style lang="scss" scoped>
    .mw-icon {width: 1em; height: 1em;}
</style>

