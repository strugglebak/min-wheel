<template>
    <div class="collapse">
        <slot></slot>
    <span>{{selected}}</span>
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
            type: Array
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
        let vm = this.findItemElement(this.selected)
        this.eventHub.$emit('update:selected', vm, this.selected);

        this.eventHub.$on('update:addSelected', (vm, name)=> {
            let selectedBackup = JSON.parse(JSON.stringify(this.selected));
            if (this.accordion) {
                selectedBackup = [name];
            } else {
                selectedBackup.push(name);
            }
            this.eventHub.$emit('update:selected', vm, selectedBackup);
        });
        this.eventHub.$on('update:removeSelected', (vm, name)=> {
            let selectedBackup = JSON.parse(JSON.stringify(this.selected));
            let index = selectedBackup.indexOf(name);
            selectedBackup.splice(index, 1);
            this.eventHub.$emit('update:selected', vm, selectedBackup);
        });
    }
}
</script>
<style lang="scss" scoped>
    .collapse {
    }
</style>
