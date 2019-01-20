<template>
    <div class="toast">
        <slot></slot>
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
        }
    },
    methods: {
        autoCloseToast(delay=3000){
            setTimeout(()=>{
                this.$el.remove();
                this.$destroy();
            }, delay);
        },
    },
    mounted() {
        if (this.isAutoClose) {
            this.autoCloseToast(this.autoCloseDelay);
        }
    },
}
</script>
<style lang="scss" scoped>
    $toast-width: 288px;
    $toast-padding: 13px 0;
    $toast-font-size: 14px;
    $toast-color: white;
    $toast-bg-color: rgba(0,0,0,0.75);
    $toast-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    $toast-border-radius: 4px;
    .toast {
        width: $toast-width;
        padding: $toast-padding;
        font-size: $toast-font-size;
        color: $toast-color;
        background-color: $toast-bg-color;
        box-shadow: $toast-box-shadow;
        border-radius: $toast-border-radius;
        text-align: center;
        position: fixed;
        top: 0; left: 50%;
        margin-left: (-$toast-width/2);
    }
</style>
