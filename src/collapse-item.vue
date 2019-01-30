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
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    methods: {
        onTitleClick() {
            this.isVisible = !this.isVisible;
        }
    },
    data() {
        return {
            isVisible: false,
        }
    },
    mounted() {
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