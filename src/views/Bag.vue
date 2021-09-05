<template>
  <div class="wrapper">
    <button id="btn1" @click="hero">角色</button>

    <button id="btn2" @click="weapons">武器</button>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {},
  setup() {
    const router = useRouter();
    const store = useStore();

    const arr = reactive([]);
    const hero = () => {
      router.push({ path: "/" });
    };
    const weapons = () => {
      router.push({ path: "/" });
    };

    onMounted(() => {
      arr.push(store.state.backpack);
      console.log(arr);
    });

    return {
      hero,
      weapons,
    };
  },
};
</script>

<style scoped>
#btn1 {
  position: fixed;
  top: 15%;
  left: 30%;
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

#btn2 {
  position: fixed;
  top: 15%;
  left: 70%;
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
</style>
