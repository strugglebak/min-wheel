<template>
    <div class="toast" ref="toast">
        <div class="text" ref="text">
            <slot></slot>
        </div>
        <div class="line" ref="line"></div>
        <span class="close-button"
            v-if="closeButton"
            v-on:click="onClickButtonToClose">{{closeButton.text}}</span>
    </div>   
</template>
<script>
export default {
    name: 'MwToast',
    props: {
        isAutoClose: {
            type: Boolean,
            default: false 
        },
        autoCloseDelay: {
            type: Number,
            default: 3000
        },
        closeButton: {
            type: Object,
            default() {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
    },
    methods: {
        close() {
            this.$el.remove();
            this.$destroy();
        },
        autoClose(delay=3000){
            setTimeout(()=>{
                this.close();
            }, delay);
        },
        judgeWayToClose() {
            if (this.isAutoClose) {
                this.autoClose(this.autoCloseDelay);
            }
        },
        onClickButtonToClose() {
            this.close();
            if (this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this);
            }
        },
        updateElementStyles() {
            this.$nextTick(()=>{
                let updateHeight = this.$el.getBoundingClientRect().height
                console.log(updateHeight);
                this.$refs.line.style.height = updateHeight + 'px';
                console.log(this.$refs.line.style.height);
            })
        },
    },
    mounted() {
        this.updateElementStyles();
        this.judgeWayToClose();
    },
}
</script>
<style lang="scss" scoped>
    $toast-padding: 13px 0;
    $toast-font-size: 14px;
    $toast-color: white;
    $toast-bg-color: rgba(0,0,0,0.75);
    $toast-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    $toast-border-radius: 4px;
    .toast {
        font-size: $toast-font-size;
        color: $toast-color;
        background-color: $toast-bg-color;
        box-shadow: $toast-box-shadow;
        border-radius: $toast-border-radius;
        position: fixed;
        top: 0; left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        min-height: 40px;

        .text {
            border: 1px solid green;
            padding: 0 84px;
        }

        .line {
            border: 1px solid #ddd;
            height: 100%;
        }

        .close-button {
            cursor: pointer;
            border: 1px solid red;
            padding: 0 13px;
        }
    }
</style>
