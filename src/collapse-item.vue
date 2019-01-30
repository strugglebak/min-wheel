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
                this.eventHub.$emit('update:addSelected', this, this.name);
            } else {
                this.eventHub.$emit('update:removeSelected', this, this.name);
            }
        }
    },
    data() {
        return {
            isVisible: false,
        }
    },
    mounted() {
        this.eventHub.$on('update:selected', (vm, names)=> {
            if (names.includes(this.name)) {
                this.open();
            } else {
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