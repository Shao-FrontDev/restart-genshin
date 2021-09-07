<template>
  <div class="wrapper">
    <n-tooltip trigger="hover">
      <template #trigger>
        <button id="btn1" @click="luckOfKing">欧皇</button>
      </template>
      提升运气
    </n-tooltip>

    <n-tooltip trigger="hover">
      <template #trigger>
        <button id="btn2" @click="next">非尊</button>
      </template>
      普通运气
    </n-tooltip>
  </div>
</template>

<script>
import { NTooltip } from "naive-ui";

import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  components: { NTooltip },
  setup() {
    const router = useRouter();
    const store = useStore();
    const next = () => {
      router.push({ path: "/addrich" });
    };
    const luckOfKing = () => {
      store.commit("luck", 2);
      router.push({ path: "/addrich" });
    };
    return { next, luckOfKing };
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
