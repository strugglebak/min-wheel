<template>
    <div class="mw-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .mw-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .mw-button {
            border-radius: 0;
            margin-left: -1px;
            padding: 0 1.2em;

            &:first-child {
                border-top-left-radius: 4px;
                border-bottom-left-radius: var(--button-border-radius);
                margin-left: 0;
            }
            &:last-child {
                border-top-right-radius: var(--button-border-radius);
                border-bottom-right-radius: var(--button-border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    } 
</style> 
