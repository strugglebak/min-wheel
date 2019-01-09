<template>
   <svg v-if="name" class="mw-icon">
       <use :xlink:href="`#icon-${name}`"></use>
   </svg> 
</template>
<script>
export default {
    props: ['name']
}
</script>
<style lang="scss">
    .mw-icon {width: 1em; height: 1em;}
</style>

