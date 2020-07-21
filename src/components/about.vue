<template>
  <h1>这是about页面</h1>
</template>
<script>
import { sleep } from "../util/index";
import { onUnmounted } from "vue";

export default {
  async setup() {
    await sleep(1000);
  }
};
</script>