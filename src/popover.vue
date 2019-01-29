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
    props: {
        offset: {
            type: [String, Number],
            default: 12,
        }
    },
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
            if ( !(this.$refs.popover.contains(e.target) || this.$refs.contentWrapper.contains(e.target)) ) {
                this.close();
            }
        },
        onPopoverClick(e) {
            console.log('popover 被点击')
            // if the scope of click inside the trigger-wrapper (include the trigger-wrapper)
            this.$nextTick(()=> {
                if (this.$refs.triggerWrapper.contains(e.target)) {
                    if (!this.isVisible) {
                        this.open();
                        this.appendPopoverContent();
                    } else {
                        this.close();
                    }
                }
            });
        },
        appendPopoverContent() {
            this.$nextTick(()=> {
                document.body.appendChild(this.$refs.contentWrapper);
                let {left, top} = this.$el.getBoundingClientRect();
                let contentHeight = this.$refs.contentWrapper.getBoundingClientRect().height;
                this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`;
                console.log(contentHeight)
                this.$refs.contentWrapper.style.top = `${top + window.scrollY - contentHeight}px`;
            });
        },
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
        display: inline-block;
        > .trigger-wrapper {
        }
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid #c8c8c8;
        min-width: 150px;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding: 1.2em 1.4em;
    }
</style>
