<template>
  <button class="mw-button" v-bind:class="{[`icon-${iconPosition}`]: true}">
    <mw-icon class="icon" v-bind:name="icon"></mw-icon>
    <mw-icon class="loading" name="loading"></mw-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props: ['icon', 'iconPosition']
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
