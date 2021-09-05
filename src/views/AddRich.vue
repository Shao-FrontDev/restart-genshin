<template>
  <div class="wrapper">
    <n-tooltip trigger="hover">
      <template #trigger>
        <button id="btn1" @click="mahuateng">只要充钱，你就能变强</button>
      </template>
      每天160原石
    </n-tooltip>

    <n-tooltip trigger="hover">
      <template #trigger>
        <button id="btn2" @click="next">没钱NPC</button>
      </template>
      每天60原石
    </n-tooltip>
  </div>
</template>

<script>
import { NTooltip } from "naive-ui";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  components: {
    NTooltip,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const next = () => {
      router.push({ path: "/start" });
    };
    const mahuateng = () => {
      store.commit("addMoney");
      router.push({ path: "/start" });
    };
    return {
      NTooltip,
      next,
      mahuateng,
    };
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

.info {
  position: fixed;
  top: 10%;
  right: 10%;
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
