<template>
  <div>
    <row v-slot="props" >
      <slot v-bind:text="props.text">
        <p>
          table
        </p>
      </slot>
    </row>
  </div>
</template>
<script>
  import row from './row';

  export default {
    components: {
      row
    }
  }
</script>