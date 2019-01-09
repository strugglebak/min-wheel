<template>
  <button class="mw-button">按钮</button>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .mw-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: var(--button-padding);
    background-color: var(--button-bg-color);
    border: var(--button-border);
    border-radius: var(--button-border-radius);

    &:hover {
      border-color: var(--button-hover-border-color);
    }
    &:active {
      background-color: var(--button-active-bg-color);
    }
    &:focus {
      outline: none;
    }
  }

</style>
