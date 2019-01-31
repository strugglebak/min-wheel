<template>
    <div class="collapse-item">
        <div class="collapse-item-title"
            v-on:click="onTitleClick">
            <mw-icon name="next"
                v-bind:class="iconNameClasses">
            </mw-icon>
            <span>{{title}}</span>
        </div>
        <transition name="fade">
            <div class="collapse-item-content"
                v-if="isVisible">
                <slot></slot>
            </div>
        </transition>
    </div>   
</template>
<script>
import Icon from './icon'
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
        iconNameClasses() {
            return {
                [`icon-${this.iconDirection}`]: true,
            }
        },
    },
    methods: {
        open() {
            this.isVisible = true;
            this.iconDirection = 'down';
        },
        close() {
            this.isVisible = false;
            this.iconDirection = 'right';
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
            iconDirection: 'right',
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
        .fade-enter-active, .fade-leave-active {
            transition: opacity 0.3s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
        }

        padding: 10px 0;
        > .collapse-item-title {
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            vertical-align: middle;
            padding: 0 12px;
            > .icon-right {
                transform: rotate(0deg);
                transition: all 0.3s;
            }
            > .icon-down {
                transform: rotate(90deg);
                transition: all 0.3s;
            }
        }
        > .collapse-item-content {
            border-top: 1px solid rgba(153,153,153,1);
            margin-top: 10px;
            padding-top: 10px;
            padding-left: 12px;
            padding-right: 12px;
            will-change: height;
        }
        border: 1px solid rgba(153,153,153,1);
        border-bottom: none;
        &:first-child {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
        &:last-child {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            border-bottom: 1px solid rgba(153,153,153,1);
        }
    }
</style>