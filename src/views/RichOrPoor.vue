<template>
  <div class="wrapper">
    <div class="btn-wrapper">
      <button id="btn1" @click="next">欧皇</button>
    </div>
    <div class="btn-wrapper">
      <button id="btn2" @click="next">非尊</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const next = () => {
      router.push({ path: "/addrich" });
    };
    return { next };
  },
};
</script>

<style scoped>
#btn1 {
  position: fixed;
  top: 65%;
  left: 50%;
  padding: 0.5rem 1.5rem;
  border: 1px #eeeeee solid;
  border-radius: 0.2rem;
  background-color: #393e46;
  font-size: 1.6rem;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
  color: #eeeeee;
}

#btn2 {
  position: fixed;
  top: 35%;
  left: 50%;
  padding: 0.5rem 1.5rem;
  border: 1px #eeeeee solid;
  border-radius: 0.2rem;
  background-color: #393e46;
  font-size: 1.6rem;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
  color: #eeeeee;
}
</style>
