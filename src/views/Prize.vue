<template>
  <ul id="talents" class="selectlist">
    <transition-group name="list">
      <li v-for="(item, index) in prizeArr" :key="index" :class="item.star">
        {{ item.prize }}
      </li>
    </transition-group>
  </ul>

  <button id="btn2" @click="close">关闭</button>
</template>

<script>
import { onMounted, reactive } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const prizeArr = reactive([]);
    let timer;
    let setintervalCount;

    const close = () => {
      store.dispatch("clearGifts");
      router.push({ path: "/start" });
    };
    const number = route.params;
    onMounted(() => {
      store.dispatch("changeGifts", number);
      const prizeResult = store.getters["prizeResult"];
      setintervalCount = prizeResult.length;
      timer = setInterval(() => {
        if (setintervalCount === 0) {
          clearInterval(timer);
        } else {
          prizeArr.push(prizeResult.pop());
          setintervalCount--;
        }
      }, 400);
    });
    return {
      close,
      prizeArr,
    };
  },
};
</script>

<style scoped>
#btn2 {
  position: fixed;
  top: 80%;
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

.selectlist {
  position: fixed;
  list-style-type: none;
  left: 50%;
  top: 5rem;
  bottom: 8.5rem;
  width: 30rem;
  max-width: calc(100% - 2rem);
  margin: auto;
  padding: 0;
  overflow: auto;
  transform: translateX(-50%);
}

.selectlist > li {
  position: relative;
  border: 1px #eeeeee solid;
  display: inline-block;
  width: 95%;
  margin: 0.1rem auto;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 0.2rem;
  cursor: pointer;
  color: #eeeeee;
  user-select: none;
}
.four {
  background-color: #ff5b45;
}
.five {
  background-color: #f6bb52;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
