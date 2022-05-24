<template>
  <div>
    <slot v-bind:text="text">
      <p>
        cell
      </p>
      {{ text }}
    </slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'test'
      }
    }
  }
</script>