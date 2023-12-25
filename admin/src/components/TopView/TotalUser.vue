<template>
  <div class="total-user">
    <CommonCard title="今日用户交易数" value="30">
      <template #default>
        <div class="chart"></div>
      </template>
      <template #footer>
        <div class="footer">
          <span>退货率</span>
          <span class="fw-550">3.57%</span>
        </div>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import CommonCard from "@/components/TopView/CommonCard.vue";
export default {
  components: {
    CommonCard,
  },
};
</script>

<style scoped></style>
