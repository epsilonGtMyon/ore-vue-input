<template>
  <span class="preudotooltip">
    <slot></slot>
    <div class="tooltip-area">
      <slot name="tooltip-content"></slot>
    </div>
  </span>
</template>

<script>
//なんちゃってツールチップ
export default {
  name: "PseudoTooltip"
};
</script>

<style lang="scss" scoped>
.preudotooltip {
  position: relative;
  .tooltip-area {
    position: absolute;
    display: none;
    z-index:20;
  }
  &:hover .tooltip-area {
    display: block;
  }
}
</style>
