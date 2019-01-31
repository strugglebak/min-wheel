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
        accordion: {
            type: Boolean,
            default: false,
        },
        selected: {
            type: [String, Array]
        }
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
    },
    data() {
        return {eventHub: new Vue(),}
    },
    provide() {
        return { eventHub: this.eventHub };
    },
    mounted() {
        this.eventHub.$on('update:selected', (vm, names)=> {
            this.$emit('update:selected', names);
        });

        this.eventHub.$on('update:addSelected', (vm, name)=> {
            let selectedBackup;
            if (this.accordion) {
                selectedBackup = name;
            } else {
                selectedBackup = JSON.parse(JSON.stringify(this.selected));
                selectedBackup.push(name);
            }
            this.eventHub.$emit('update:selected', vm, selectedBackup);
        });
        this.eventHub.$on('update:removeSelected', (vm, name)=> {
            let selectedBackup;
            if (this.accordion) {
                selectedBackup = '';
            } else {
                selectedBackup = JSON.parse(JSON.stringify(this.selected));
                let index = selectedBackup.indexOf(name);
                selectedBackup.splice(index, 1);
            }
            this.eventHub.$emit('update:selected', vm, selectedBackup);
        });

        let vm = this.findItemElement(this.selected)
        this.eventHub.$emit('update:selected', vm, this.selected);
    }
}
</script>
<style lang="scss" scoped>
    .collapse {
    }
</style>
