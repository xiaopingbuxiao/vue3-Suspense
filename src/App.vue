
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
  <!-- <button @click="loadAsyncComponent">点击加载异步组件</button>
  <div class="box">
    <h1 v-if="error">load async component error</h1>
    <Suspense v-else-if="loadAsync">
      <template #default>
        <AsyncComponent></AsyncComponent>
      </template>
      <template #fallback>
        <div class="loading"></div>
      </template>
    </Suspense>
  </div> -->

  <div class="box">
    <button @click="reload">刷新</button>
    <h1 v-if="error">load async component error</h1>
    <Suspense v-else>
      <template #default>
        <AsyncComponent></AsyncComponent>
      </template>
      <template #fallback>
        <div class="loading"></div>
      </template>
    </Suspense>
  </div>

  <hr />
  <div class="box">
    <router-link to="/home">Home</router-link>|
    <router-link to="/about">About</router-link>
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <div class="loading"></div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onErrorCaptured } from "vue";

export default {
  name: "App",
  setup() {
    const error = ref(null);
    onErrorCaptured(e => {
      error.value = e;
      console.log(e);
      return false;
    });
    return { error };
  },
  data() {
    return {
      loadAsync: false
    };
  },
  components: {
    AsyncComponent: defineAsyncComponent(() => {
      return import("./components/async-component.vue");
    })
  },
  methods: {
    loadAsyncComponent() {
      this.loadAsync = true;
    },
    reload() {
      window.location.reload();
    }
  }
};
</script>


<style lang="scss">
#app {
  width: 800px;
  height: 600px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
button {
  padding: 12px 12px;
  background-color: #1890ff;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
.loading {
  position: absolute;
  width: 36px;
  height: 36px;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  background-image: url("./assets/images/Loading.png");
  background-size: 100%;
  animation: rotate 1.4s linear infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.router-link-active {
  color: #1890ff;
}
.box {
  height: 200px;
  position: relative;
}
</style>
