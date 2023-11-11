<template>
  <button
    class="button"
    :class="{small: isSmall, dangerous: isDangerous}"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    isSmall: {
      type: Boolean
    },

    isDangerous: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang='scss'>
  .button {
    margin: 0.5rem;
    padding: 0.5rem;

    border: 1px solid darkgrey;
    border-radius: 5px;
    background-color: lightcyan;
    cursor: pointer;

    width: 150px;
    height: 40px;

    &:hover {
      box-shadow: 0 0 5px darkgray;
    }
  }

  .small {
    width: 60px;
    height: 30px;
  }

  .dangerous {
    background-color: red;
    color: white;
  }
</style>
