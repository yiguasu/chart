<template>
  <div class="box">
    <TopView></TopView>
    <SecondView></SecondView>
    <ThirdView></ThirdView>
    <BottomView></BottomView>
  </div>
</template>
<script>
import TopView from "./components/TopView/TopViewIndex.vue";
import SecondView from "./components/SecondView.vue";
import ThirdView from "./components/ThirdView.vue";
import BottomView from "./components/BottomView.vue";
import "reset.css";
export default {
  components: {
    TopView,
    SecondView,
    ThirdView,
    BottomView,
  },
};
</script>
<style lang="scss">
.box {
  width: 100%;
  background-color: #eee;
  padding: 20px;
}
</style>
