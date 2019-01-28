<template>
    <div class="popover" ref="popover">
        <div class="content-wrapper" ref="contentWrapper"
            v-if="isVisible">
            <slot name="content"></slot>
        </div>
        <div class="trigger-wrapper" ref="triggerWrapper">
            <slot></slot>
        </div>
    </div>   
</template>
<script>
export default {
    name: 'MwPopover',
    methods: {
        open() {
            this.isVisible = true;
            document.addEventListener('click', this.onDocumentClick);
            console.log('document 监听了 click listener');
        },
        close() {
            this.isVisible = false;
            document.removeEventListener('click', this.onDocumentClick);
            console.log('document 移除了 click listener')
        },
        onDocumentClick(e) {
            console.log('document 被点击')
            console.log(e.target)
            if (!this.$refs.popover.contains(e.target)) {
                this.close()
            }
        },
        onPopoverClick(e) {
            console.log('popover 被点击')
            // if the scope of click inside the trigger-wrapper (include the trigger-wrapper)
            if (this.$refs.triggerWrapper.contains(e.target)) {
                if (!this.isVisible) {
                    this.open();
                } else {
                    this.close();
                }
            }
        }
    },
    data() {
        return {
            isVisible: false,
        }
    },
    mounted() {
        this.$refs.popover.addEventListener('click', this.onPopoverClick);
        console.log('popover 监听了 click')
    },
    destroyed() {
        this.$refs.popover.removeEventListener('click', this.onPopoverClick);
        console.log('popover 移除了 click')
    }
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
        > .trigger-wrapper {
            padding: 1em;
        }
    }
</style>
