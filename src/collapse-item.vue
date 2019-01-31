<template>
    <div class="collapse-item">
        <div class="collapse-item-title"
            v-on:click="onTitleClick"
            v-bind:class="titleClasses">
            <mw-icon name="next"></mw-icon>
            <span>{{title}}</span>
        </div>

        <div class="grow" ref="grow">
            <div class="collapse-item-content-wrapper" ref="contentWrapper">
                <div class="collapse-item-content" ref="content"
                    v-show="isVisible">
                    <slot></slot>
                </div>
            </div>
        </div>

    </div>   
</template>
<script>
import Icon from './icon'
import { inspect } from 'util';
export default {
    name: 'MwCollapseItem',
    components: {
        'mw-icon': Icon
    },
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
    computed: {
        titleClasses() {
            return {
                [`icon-${this.iconDirection}`]: true,
            }
        },
    },
    methods: {
        open() {
            this.isVisible = true;
            this.iconDirection = 'down';
            this.$nextTick(()=> {
                let contentWrapper = this.$refs.contentWrapper;
                this.$refs.grow.style.height = contentWrapper.getBoundingClientRect().height + "px";
            });
        },
        close() {
            this.iconDirection = 'right';
            this.$refs.grow.style.height = 0;
            setTimeout(() => {
                this.isVisible = false;
            }, 200);
        },
        onTitleClick() {
            if (this.eventHub) {
                if (!this.isVisible) {
                    this.eventHub.$emit('update:addSelected', this, this.name);
                } else {
                    this.eventHub.$emit('update:removeSelected', this, this.name);
                }
            } else {
                if (!this.isVisible) {
                    this.open();
                } else {
                    this.close();
                }
            }
        }
    },
    data() {
        return {
            isVisible: false,
            iconDirection: 'right',
        }
    },
    mounted() {
        this.eventHub && this.eventHub.$on('update:selected', (vm, names)=> {
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
        border: 1px solid rgba(153,153,153,1);
        margin-top: -1px; margin-left: -1px; margin-right: -1px;
        > .collapse-item-title {
            cursor: pointer;
            display: flex; align-items: center; padding: 10px 12px;
            min-height: 32px;
            &.icon-right { 
                > .mw-icon { transform: rotate(0deg); transition: transform 0.3s; }
            }
            &.icon-down { 
                > .mw-icon { transform: rotate(90deg); transition: transform 0.3s; }
            }
        }
        &:first-child {
            border-top-left-radius: 4px; border-top-right-radius: 4px;
        }
        &:last-child {
            border-bottom-left-radius: 4px; border-bottom-right-radius: 4px;
        }
        > .grow {
            height: 0;
            transition: height 0.3s;
            overflow: hidden;
            > .collapse-item-content-wrapper {
                > .collapse-item-content {
                    padding: 8px 12px;
                }
            }
        }
    }
</style>