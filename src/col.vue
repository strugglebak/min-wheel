<template>
    <div class="col"
        v-bind:class="colClass"
        v-bind:style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MwCol',
    props: {
       scale: { type: [Number, String] },
       offset: { type: [Number, String] }
    },
    computed: {
        colClass() {
            let {scale, offset} = this;
            return [
                scale && `scale-${scale}`, 
                offset && `offset-${offset}`
            ]
        },
        colStyle() {
            let {ditch} = this;
            return {
                paddingLeft: ditch/2 + 'px', 
                paddingRight: ditch/2 + 'px'
            }
        }
    },
    data() {
        return { ditch: 0 }
    },
}
</script>
<style lang="scss" scoped>
    .col {
        $class-prefix: scale-;
        @for $number from 1 through 24 { 
            &.#{$class-prefix}#{$number} {
                width: ($number / 24 * 100%);
            }
        }
        $class-prefix: offset-;
        @for $number from 1 through 24 { 
            &.#{$class-prefix}#{$number} {
                margin-left: ($number / 24 * 100%);
            }
        }
    }
</style>