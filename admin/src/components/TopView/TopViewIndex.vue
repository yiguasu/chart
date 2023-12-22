<template>
  <div class="top-view">
    <TotalOrder></TotalOrder>
    <TotalSale></TotalSale>
    <TotalUser></TotalUser>
    <TodayUser></TodayUser>
  </div>
</template>

<script>
import TotalOrder from "../TopView/TotalOrder.vue";
import TotalSale from "../TopView/TotalSale.vue";
import TotalUser from "../TopView/TotalUser.vue";
import TodayUser from "../TopView/TodayUser.vue";
export default {
  components: {
    TotalOrder,
    TotalSale,
    TotalUser,
    TodayUser,
  },
};
</script>

<style scoped></style>
