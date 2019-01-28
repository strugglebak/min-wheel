<template>
    <div class="popover" v-on:click="trigger">
        <div class="content-wrapper" v-if="isVisible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>   
</template>
<script>
export default {
    name: 'MwPopover',
    methods: {
        trigger() {
            this.isVisible = !this.isVisible;
        }
    },
    data() {
        return {
            isVisible: false,
        }
    },
}
</script>
<style lang="scss" scoped>
    .popover {
        border: 1px solid green;
        display: inline-block;
        position: relative;
        > .content-wrapper {
            position: absolute;
            left: 0;
            bottom: 100%;
            border: 1px solid red;
        }
    }
</style>
