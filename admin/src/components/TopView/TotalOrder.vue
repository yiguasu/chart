<template>
  <div class="total-order">
    <CommonCard title="累计订单额" value="13145">
      <template #default>
        <v-chart :option="option"></v-chart>
      </template>
      <template #footer>
        <div class="footer">
          <span>昨日销售额</span>
          <span class="fw-550">￥12768</span>
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
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          show: false,
          boundaryGap: false, //去掉距离轴的间隙
        },
        yAxis: {
          type: "value",
          show: false,
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        series: [
          {
            type: "line",
            data: [123, 432, 541, 234, 586, 445, 112, 98],
            smooth: true,
            areaStyle: {
              color: "purple",
            },
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
