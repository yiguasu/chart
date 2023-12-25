<template>
  <div>
    <common-card title="累计销售额" value="230000">
      <template #default>
        <div class="chart">
          <div>
            <span>日同比</span>
            <span class="fw-550">2.33</span>
          </div>
          <div>
            <span>月同比4.14</span>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="footer">
          <span>昨日销售额</span>
          <span class="fw-550">￥200000</span>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import CommonCard from "@/components/TopView/CommonCard.vue";

export default {
  components: { CommonCard },
};
</script>

<style lang="scss" scoped>
.chart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}
</style>
