<template>
  <div class="commom-card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div name="chart">
      <slot name="default"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "value"],
};
</script>

<style lang="scss" scoped>
.chart {
  height: 50px;
  margin-top: 10px;
}
span {
  // &表示span自身
  &.increase {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 4px;
    border-color: transparent transparent green transparent;
    border-style: solid;
    margin-left: 10px;
    transform: translateY(-50%);
  }
  &.decrease {
    display: inline-block;
    width: 0;
    padding: 0;
    border-width: 4px;
    border-color: red transparent transparent transparent;
    border-style: solid;
    margin-left: 10px;
  }
}
</style>
