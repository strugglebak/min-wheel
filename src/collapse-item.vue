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
        name: {
            type: [String, Number]
        }
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
                this.eventHub && this.eventHub.$emit('update:selected', this, this.name);
            } else {
                this.close();
            }
        }
    },
    data() {
        return {
            isVisible: false,
        }
    },
    mounted() {
        if (!this.eventHub) { return }
        this.eventHub.$on('update:selected', (vm, name)=> {
            if (this !== vm || this.name !== name) {
                this.close();
            } else {
                this.open();
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