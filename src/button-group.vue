<template>
    <div class="mw-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "MwButtonGroup"
}
</script>
<style lang="scss" scoped>
    $button-border-radius: 4px;
    .mw-button-group {
        display: inline-flex; vertical-align: middle;

        > .mw-button {
            border-radius: 0; margin-left: -1px; padding: 0 1.2em;

            &:first-child { border-top-left-radius: 4px; border-bottom-left-radius: $button-border-radius; margin-left: 0; }
            &:last-child { border-top-right-radius: $button-border-radius; border-bottom-right-radius: $button-border-radius; }
            &:hover { position: relative; z-index: 1; }
        }
    } 
</style> 
