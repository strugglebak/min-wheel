<template>
  <button class="mw-button" 
    v-bind:class="{[`icon-${iconPosition}`]: true}" 
    v-on:click="$emit('click')">
    <mw-icon class="icon"  v-if="!loading" v-bind:name="icon"></mw-icon>
    <mw-icon class="icon loading" v-if="loading" name="loading"></mw-icon>
    <div class="button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'
  export default {
    name: "MwButton",
    components: {
      'mw-icon': Icon
    },
    props: {
      icon: {}, 
      loading: { type: Boolean, default: false },
      iconPosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          return ['left', 'right'].includes(value);
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-padding: 0 1em;
  $button-bg-color: #FFFFFF;
  $button-active-bg-color: #EEEEEE;
  $button-border: 1px solid #C8C8C8;
  $button-border-radius: 4px;
  $button-hover-border-color: #666666;
  @keyframes roll { 
    0% { transform: rotate(0deg); } 
    100% { transform: rotate(360deg); } 
  }
  .mw-button {
    font-size: $font-size; height: $button-height; padding: $button-padding; background-color: $button-bg-color; border: $button-border; border-radius: $button-border-radius;

    &:hover { border-color: $button-hover-border-color; }
    &:active { background-color: $button-active-bg-color; }
    &:focus { outline: none; }

    display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;

    > .button-content { order: 2; margin-left: 0.1em; }
    > .icon { order: 1; }
    &.icon-right { 
      > .button-content { order: 1; margin-left: 0; margin-right: 0.1em; }
      > .icon { order: 2; } 
    } 

    .loading { animation: roll 2s infinite linear; }
  } 
</style>
