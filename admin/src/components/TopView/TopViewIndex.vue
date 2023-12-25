<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalSale></TotalSale>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalOrder></TotalOrder>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalUser></TotalUser>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TodayUser></TodayUser>
        </el-card>
      </el-col>
    </el-row>
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
