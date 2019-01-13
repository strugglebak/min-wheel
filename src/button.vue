<template>
  <button class="mw-button" 
    v-bind:class="{[`icon-${iconPosition}`]: true}" 
    v-on:click="$emit('click')">
    <mw-icon class="icon"  v-if="!loading" v-bind:name="icon"></mw-icon>
    <mw-icon class="icon loading" v-if="loading" name="loading"></mw-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'
  export default {
    components: {
      'mw-icon': Icon
    },
    props: {
      icon: {}, 
      iconPosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          if (value !== 'left' && value !== 'right') {
            console.warn('your icon-position is "' + value + 
              '"' + ', but the icon position we need is just "left" or "right"');
              return false;
          } else {
            return true;
          }
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  @keyframes roll {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .mw-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: var(--button-padding);
    background-color: var(--button-bg-color);
    border: var(--button-border);
    border-radius: var(--button-border-radius);

    &:hover { border-color: var(--button-hover-border-color); }
    &:active { background-color: var(--button-active-bg-color); }
    &:focus { outline: none; }

    display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;

    > .content { order: 2; margin-left: 0.1em;}
    > .icon { order: 1; }
    &.icon-right { 
      > .content { order: 1; margin-left: 0; margin-right: 0.1em;}
      > .icon { order: 2; } 
    } 

    .loading {
      animation: roll 2s infinite linear;
    }
  } 
</style>
