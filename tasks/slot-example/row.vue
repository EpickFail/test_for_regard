<template>
  <div>
    <cell v-slot="props">
      <slot v-bind:text="props.text">
        <p>
          row
        </p>
      </slot>
    </cell>
  </div>
</template>
<script>
  import cell from './cell';

  export default {
    components: {
      cell
    }
  }
</script>