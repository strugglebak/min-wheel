<template>
    <div class="collapse-item">
        <div class="collapse-item-title"
            v-on:click="onTitleClick">{{title}}</div>
        <div class="collapse-item-content"
            v-if="isVisible">
            <slot></slot>
        </div>
    </div>   
</template>
<script>
export default {
    name: 'MwCollapseItem',
    inject: ['eventHub'],
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        open() {
            this.isVisible = true;
        },
        close() {
            this.isVisible = false;
        },
        onTitleClick() {
            if (!this.isVisible) {
                this.open();
                this.eventHub && this.eventHub.$emit('update:xxx', this);
            }        
        }
    },
    data() {
        return {
            isVisible: false,
        }
    },
    mounted() {
        this.eventHub && this.eventHub.$on('update:xxx', (vm)=> {
            if (vm !== this) {
                this.close();
            }
        });
    }
}
</script>
<style lang="scss" scoped>
    .collapse-item {
        border: 1px solid blue;
        .collapse-item-title {
            cursor: pointer;
        }
    }
</style>