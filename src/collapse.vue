<template>
    <div class="collapse">
        <slot></slot>
    </div>   
</template>
<script>
import Vue from 'vue'
export default {
    name: 'MwCollapse',
    props: {
        accordion: { type: Boolean, default: false, },
        selected: { type: [String, Array] }
    },
    methods: {
        findItemElement(selected) {
            let vm;
            this.$children.forEach((element) => {
                if ( element && element.$options.name === 'MwCollapseItem'
                    && selected.includes(element.name) ) {
                        vm = element;
                }
            });
            return vm;
        },
        listenUpdateSelected() {
            this.eventHub.$on('update:selected', (vm, names)=> {
                this.$emit('update:selected', names);
            });
        },
        listenAddUpdateSelected(selectedBackup) {
            this.eventHub.$on('update:addSelected', (vm, name)=> {
                if (this.accordion) {
                    selectedBackup = name;
                } else {
                    selectedBackup.push(name);
                }
                this.eventHub.$emit('update:selected', vm, selectedBackup);
            });
        },
        listenRemoveUpdateSelected(selectedBackup) {
            this.eventHub.$on('update:removeSelected', (vm, name)=> {
                if (this.accordion) {
                    selectedBackup = '';
                } else {
                    let index = selectedBackup.indexOf(name);
                    selectedBackup.splice(index, 1);
                }
                this.eventHub.$emit('update:selected', vm, selectedBackup);
            });
        },
        emitSignal() {
            let vm = this.findItemElement(this.selected)
            this.eventHub.$emit('update:selected', vm, this.selected);
        },
    },
    data() {
        return {eventHub: new Vue(),}
    },
    provide() {
        if (this.selected) {
            return { eventHub: this.eventHub };
        } else {
            return { eventHub: undefined }
        }
    },
    mounted() {
        if (!this.eventHub || !this.selected) { return }
        let selectedBackup = JSON.parse(JSON.stringify(this.selected));
        this.listenUpdateSelected();
        this.listenAddUpdateSelected(selectedBackup);
        this.listenRemoveUpdateSelected(selectedBackup);
        this.emitSignal();
    }
}
</script>
<style lang="scss" scoped>
    .collapse {
    }
</style>
