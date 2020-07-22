
<template>
  <h1>this is async component</h1>
</template>

<script>
import { sleep } from "../util/index";
import { ref, onErrorCaptured } from "vue";
export default {
  name: "AsyncComponent",
  async setup() {
    const error = ref(null);
    // ... some code 将初始化页面需要的数据放在此处，
    if (Math.random() > 0.5) {
      await sleep(1000); //模拟数据请求
    } else {
      throw new Error("error message");
    }
  }
};
</script>