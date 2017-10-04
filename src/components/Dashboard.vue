<template>
  <div class="dashboard" :style="grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  props: {
    rows: {
      type: Number,
      default: 3
    },
    columns: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      grid: {
        gridTemplateColumns: '1fr '.repeat(this.columns),
        gridTemplateRows: '1fr '.repeat(this.rows)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dashboard {
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  height: 100%;
}

</style>
