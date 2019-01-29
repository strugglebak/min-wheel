<template>
    <div class="popover" ref="popover">
        <transition name="fade">
            <div class="content-wrapper" ref="contentWrapper"
                v-if="isVisible">
                <slot name="content" v-bind:close="close"></slot>
            </div>
        </transition>
        <div class="trigger-wrapper" ref="triggerWrapper">
            <slot></slot>
        </div>
    </div>   
</template>
<script>
export default {
    name: 'MwPopover',
    props: {
        offset: { type: [String, Number], default: 12, },
        position: { type: String, default: 'top',
            validator: function(value) {
                return ['top', 'bottom', 'left', 'right'].includes(value);
            }
        },
        width: { type: [String, Number], default: 200, },
        trigger: { type: String, default: 'click',
            validator: function(value) {
                return ['click', 'hover'].includes(value);
            }
        }
    },
    methods: {
        open() {
            this.isVisible = true;
            document.addEventListener('click', this.onDocumentClick);
            this.appendPopoverContent();
            this.positionPopoverContent();
        },
        close() {
            this.isVisible = false;
            document.removeEventListener('click', this.onDocumentClick);
        },
        onPopoverContentMouseEnter(e) {
            this.isMouseOut = false;
        },
        onPopoverContentMouseLeave(e) {
            this.isMouseOut = true;
            setTimeout(() => {
                let contentWrapper = this.$refs.contentWrapper;
                if (contentWrapper) {
                    contentWrapper.removeEventListener('mouseenter', this.onPopoverContentMouseEnter);
                    contentWrapper.removeEventListener('mouseleave', this.onPopoverContentMouseLeave);
                }
                this.close();
            }, 200);
        },
        onPopoverMouseEnter(e) {
            this.open();
            this.$nextTick(()=> {
                this.$refs.contentWrapper.addEventListener('mouseenter', this.onPopoverContentMouseEnter);
                this.$refs.contentWrapper.addEventListener('mouseleave', this.onPopoverContentMouseLeave);
            });
        },
        onPopoverMouseLeave(e) {
            setTimeout(() => {
                if (this.isMouseOut) {
                    let contentWrapper = this.$refs.contentWrapper;
                    if (contentWrapper) {
                        contentWrapper.removeEventListener('mouseenter', this.onPopoverContentMouseEnter);
                        contentWrapper.removeEventListener('mouseleave', this.onPopoverContentMouseLeave);
                    }
                    this.close();
                }
            }, 200);
        },
        onDocumentClick(e) {
            if ( !(this.$refs.popover.contains(e.target) 
                || this.$refs.contentWrapper.contains(e.target)) ) {
                this.close();
            }
        },
        onPopoverClick(e) {
            this.$nextTick(()=> {
                if (this.$refs.triggerWrapper.contains(e.target)) {
                    this.isVisible ? this.close() : this.open();
                }
            });
        },
        appendPopoverContent() {
            this.$nextTick(()=> {
                this.$refs.contentWrapper.style.width = `${this.width}px`;
                document.body.appendChild(this.$refs.contentWrapper);
            });
        },
        positionPopoverContent() {
            this.$nextTick(()=> {
                let contentWrapper = this.$refs.contentWrapper;
                let {top, bottom, left, right} = this.$el.getBoundingClientRect();
                let {height: contentHeight, width: contentWidth} = contentWrapper.getBoundingClientRect();
                let positions = {
                    bottom: { left: `${left + window.scrollX}px`, top: `${bottom + window.scrollY + this.offset}px` },
                    right: { left: `${right + window.scrollX + this.offset}px`, top: `${top + window.scrollY}px` },
                    top: {
                        left: `${left + window.scrollX}px`,
                        top: `${top + window.scrollY - contentHeight - this.offset}px`
                    },
                    left: {
                        left: `${left + window.scrollX - contentWidth - this.offset}px`,
                        top: `${top + window.scrollY}px`
                    },
                };
                contentWrapper.style.left = positions[this.position].left;
                contentWrapper.style.top = positions[this.position].top;
            });
        }
    },
    data() {
        return { isVisible: false, isMouseOut: true, }
    },
    mounted() {
        if (this.trigger === 'click') {
            this.$refs.popover.addEventListener('click', this.onPopoverClick);
        } else if (this.trigger === 'hover') {
            this.$refs.popover.addEventListener('mouseenter', this.onPopoverMouseEnter);
            this.$refs.popover.addEventListener('mouseleave', this.onPopoverMouseLeave);
        }
    },
    destroyed() {
        if (this.trigger === 'click') {
            this.$refs.popover.removeEventListener('click', this.onPopoverClick);
        } else if (this.trigger === 'hover') {
            this.$refs.popover.removeEventListener('mouseenter', this.onPopoverMouseEnter);
            this.$refs.popover.removeEventListener('mouseleave', this.onPopoverMouseLeave);
        }
    }
}
</script>
<style lang="scss" scoped>
    $content-wrapper-border-color: #c8c8c8;
    $content-wrapper-border-radius: 4px;
    $content-wrapper-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    $content-wrapper-padding: 1.2em 1.4em;
    @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes fade-out {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    .popover { display: inline-block; }
    .content-wrapper { position: absolute; word-break: break-all;
        border: 1px solid $content-wrapper-border-color;
        border-radius: $content-wrapper-border-radius;
        box-shadow: $content-wrapper-box-shadow;
        padding: $content-wrapper-padding;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.45s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
