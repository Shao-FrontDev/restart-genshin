<template>
  <div class="info">
    <p>游戏天数：{{ days }}</p>
    <p>原石：{{ stone }}</p>
  </div>
  <button id="btn3">背包</button>
  <button id="btn1" @click="nextOne">单抽</button>

  <button id="btn2" @click="nextTen">十连抽</button>

  <button id="btn4" @click="nextDay">下一天</button>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const days = computed(() => store.state.days);
    const stone = computed(() => store.state.stone);

    const nextOne = () => {
      router.push({
        path: "/prize/1",
      });
    };
    const nextTen = () => {
      router.push({
        path: "/prize/10",
      });
    };
    const nextDay = () => {
      store.commit("nextDay");
    };
    return {
      nextOne,
      nextTen,
      days,
      nextDay,
      stone,
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

#btn3 {
  position: fixed;
  top: 10%;
  left: 10%;
  padding: 0.5rem 1rem;
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

#btn4 {
  position: fixed;
  top: 90%;
  left: 50%;
  padding: 0.5rem 1.5rem;
  border-radius: 0.2rem;
  background-color: #393e46;
  font-size: 1rem;
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
  color: #eeeeee;
}
</style>
