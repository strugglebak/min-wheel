<template>
    <div class="col"
        v-bind:class="[scale && `scale-${scale}`]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwCol',
    props: {
       scale: {
           type: [Number, String] 
       },
    },
}
</script>
<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 50px;
        background-color: #ddd;
        border: 1px solid green;

        $class-prefix: scale-;
        @for $number from 1 through 100 { 
            &.#{$class-prefix}#{$number} {
                width: ($number / 24 * 100%);
            }
        }
    }
</style>