<template>
  <button id="btn1" @click="change(false)">角色</button>

  <button id="btn2" @click="change(true)">武器</button>
  <ul id="talents" class="selectlist">
    <transition-group name="list">
      <template v-if="flag">
        <li v-for="(item, index) in weaponsArr" :key="index" :class="item.star">
          {{ item.prize }}
        </li>
      </template>
      <template v-else>
        <li v-for="(item, index) in herosArr" :key="index" :class="item.star">
          {{ item.prize }}
        </li>
      </template>
    </transition-group>
  </ul>
  <button id="btn3" @click="goback">返回</button>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const flag = ref(false);

    const weaponsArr = computed(() => {
      return store.getters["backpackWeapons"];
    });

    const herosArr = computed(() => {
      return store.getters["backpackHeros"];
    });

    onMounted(() => {});
    const goback = () => {
      router.push({ path: "/start" });
    };
    const change = (value) => {
      flag.value = value;
    };
    return {
      weaponsArr,
      herosArr,
      goback,
      flag,
      change,
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

.four {
  background-color: #ff5b45;
}
.five {
  background-color: #f6bb52;
}
.three {
  background-color: cornflowerblue;
}

.selectlist {
  position: fixed;
  list-style-type: none;
  left: 50%;
  top: 10rem;
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

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
#btn3 {
  position: fixed;
  top: 90%;
  left: 50%;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  background-color: #393e46;
  font-size: 1rem;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
  color: #eeeeee;
}
</style>
