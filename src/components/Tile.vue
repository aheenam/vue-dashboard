<template>
  <div class="tile" :style="tile">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tile',
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    w: {
      type: Number,
      required: true
    },
    h: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      tile: {
        gridColumnStart: this.x,
        gridColumnEnd: this.x + this.w,
        gridRowStart: this.y,
        gridRowEnd: this.y + this.h
      }
    }
  }
}
</script>

<style>
</style>
