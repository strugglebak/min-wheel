<template>
    <div class="col"
        v-bind:class="colClass"
        v-bind:style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
let validator = (value)=> {
    let keys = Object.keys(value);
    let isValid = true;
    keys.forEach((key)=> {
        isValid = ['scale', 'offset'].includes(key);
    });
    return isValid;
}

export default {
    name: 'MwCol',
    props: {
       scale: { type: [Number, String] },
       offset: { type: [Number, String] },
       pad: { type: Object, validator: validator},
       narrowpc: { type: Object, validator: validator},
       pc: { type: Object, validator: validator},
       widepc: { type: Object, validator: validator},
    },
    data() {
        return { ditch: 0 }
    },
    methods: {
        createColClass(obj, dev = '') {
            if (!obj) return [];
            if (!dev) {
                return [
                    obj.scale && `scale-${obj.scale}`,
                    obj.offset && `offset-${obj.offset}`
                ];
            }
            return [
                obj.scale && `${dev}-scale-${obj.scale}`,
                obj.offset && `${dev}-offset-${obj.offset}`
            ];
        }
    },
    computed: {
        colClass() {
            let {scale, offset, pad, narrowpc, pc, widepc} = this;
            
            let createColClass = this.createColClass;
            return [
                ...createColClass({scale, offset}),
                ...createColClass(pad, 'pad'),
                ...createColClass(narrowpc, 'narrowpc'),
                ...createColClass(pc, 'pc'),
                ...createColClass(widepc, 'widepc'),
            ];
        },
        colStyle() {
            let {ditch} = this;
            return {
                paddingLeft: ditch/2 + 'px', 
                paddingRight: ditch/2 + 'px'
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    .col {
        /* defalut */
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

        @media (min-width: 576px) {
            /* pad */
            $class-prefix: pad-scale-;
            @for $number from 1 through 24 { 
                &.#{$class-prefix}#{$number} {
                    width: ($number / 24 * 100%);
                }
            }
            $class-prefix: pad-offset-;
            @for $number from 1 through 24 { 
                &.#{$class-prefix}#{$number} {
                    margin-left: ($number / 24 * 100%);
                }
            }
        }
        @media (min-width: 768px) {
            /* narrowpc */
            $class-prefix: narrowpc-scale-;
            @for $number from 1 through 24 { 
                &.#{$class-prefix}#{$number} {
                    width: ($number / 24 * 100%);
                }
            }
            $class-prefix: narrowpc-offset-;
            @for $number from 1 through 24 { 
                &.#{$class-prefix}#{$number} {
                    margin-left: ($number / 24 * 100%);
                }
            }
        }
        @media (min-width: 992px) {
            /* pc */
            $class-prefix: pc-scale-;
            @for $number from 1 through 24 { 
                &.#{$class-prefix}#{$number} {
                    width: ($number / 24 * 100%);
                }
            }
            $class-prefix: pc-offset-;
            @for $number from 1 through 24 { 
                &.#{$class-prefix}#{$number} {
                    margin-left: ($number / 24 * 100%);
                }
            }
        }
        @media (min-width: 1200px) {
            /* widepc */
            $class-prefix: widepc-scale-;
            @for $number from 1 through 24 { 
                &.#{$class-prefix}#{$number} {
                    width: ($number / 24 * 100%);
                }
            }
            $class-prefix: widepc-offset-;
            @for $number from 1 through 24 { 
                &.#{$class-prefix}#{$number} {
                    margin-left: ($number / 24 * 100%);
                }
            }
        }
    }
</style>