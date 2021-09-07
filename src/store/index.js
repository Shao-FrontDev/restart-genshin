import { createStore } from "vuex";
import { isBigPrize, isSmallPrize, random } from "../utils/index";

const initData = localStorage.getItem("stateData")
  ? JSON.parse(localStorage.getItem("stateData"))
  : {
      days: 1,
      stone: 50 * 160,
      userInfo: { luckValue: 1, tuhao: false },
      prize: {
        FiveStarHeros: [
          "琴",
          "迪卢克",
          "温迪",
          "可莉",
          "莫娜",
          "阿贝多",
          "优菈",
          "埃洛伊",
          "魈",
          "刻晴",
          "七七",
          "达达利亚",
          "钟离",
          "甘雨",
          "胡桃",
          "烟菲",
          "神里菱华",
          "枫原万叶",
          "宵宫",
          "雷电将军",
        ],
        FourStarHeros: [
          "安柏",
          "莉莎",
          "凯亚",
          "芭芭拉",
          "罗莎莉亚",
          "雷泽",
          "班尼特",
          "诺艾尔",
          "菲谢尔",
          "砂糖",
          "迪奥娜",
          "北斗",
          "凝光",
          "香菱",
          "行秋",
          "重云",
          "辛焱",
          "早柚",
        ],
        FiveStarWeapons: [
          "狼的末路",
          "天空之傲",
          "无工之剑",
          "松籁响起之时",
          "风鹰剑",
          "天空之刃",
          "斫峰之刃",
          "磐岩结绿",
          "天空之翼",
          "阿莫斯之弓",
          "终末嗟叹之诗",
          "天空之卷",
          "四风原典",
          "尘世之锁 ",
          "和璞鸢",
          "昆吾断虹",
          "贯虹之槊",
          "护摩之杖",
        ],
        FourStarWeapons: [
          "宗室大剑",
          "西风大剑",
          "祭礼大剑",
          "试作古华",
          "螭骨剑",
          "钟剑",
          "白影剑",
          "雨栽",
          "黑岩斩刀",
          "千岩古剑",
          "雪葬的星银",
          "铁蜂刺",
          "匣里龙吟",
          "宗室长剑",
          "试作斩岩",
          "西风剑",
          "祭礼剑",
          "黑剑",
          "黑岩长剑",
          "暗巷闪光",
          "笛剑",
          "腐殖之剑",
          "钢轮弓",
          "祭礼弓",
          "试作澹月",
          "黑岩战弓",
          "暗巷猎手",
          "绝弦",
          "弓藏",
          "宗室长弓",
          "苍翠猎弓",
          "西风猎弓",
          "风花之颂",
          "暗巷的酒与诗",
          "西风秘典",
          "昭心",
          "匣里日月",
          "黑岩绯玉",
          "试作金珀",
          "万国诸海图",
          "宗室秘法录",
          "流浪乐章",
          "忍冬之果",
          "祭礼残章",
          "千岩长枪",
          "试作星镰",
          "决斗之枪",
          "匣里灭辰",
          "流月针",
          "宗室猎枪",
          "黑岩刺枪",
          "龙脊长枪",
          "西风长枪",
        ],
        ThreeStarWeapons: [
          "铁影阔剑",
          "飞天大御剑",
          "石英大剑",
          "以理服人",
          "沐浴龙血",
          "黎明神剑",
          "冷刃",
          "旅行剑",
          "吃鱼虎刀",
          "飞天御剑",
          "反曲弓",
          "信使",
          "黑檀弓",
          "鸦羽弓",
          "弹弓",
          "讨龙英杰谭",
          "魔导绪论",
          "琥珀玥",
          "异世界行记",
          "翡玉法球",
          "甲级宝珏",
          "白缨枪",
          "黑缨枪",
          "钺矛",
        ],
      },
      prizeResult: [],
      backpackHeros: [],
      backpackWeapons: [],
      smallPrize: 0,
      bigPrize: 0,
      bigPrizeArr: [],
      lastResult: [],
    };

console.log(localStorage.getItem("stateData"));
export default createStore({
  state: () => {
    return initData;
  },

  mutations: {
    nextDay(state) {
      state.days++;
      state.stone = state.stone += state.userInfo.tuhao ? 160 : 60;
      this.commit("save");
    },
    addMoney(state) {
      state.userInfo.tuhao = true;
      this.commit("save");
    },
    luck(state, payload) {
      console.log(state);
      state.userInfo.luckValue = state.userInfo.luckValue * payload;
      this.commit("save");
    },
    lotteryDraw(state, { count }) {
      state.stone -= count * 160;
      //  抽中一个五星的概率是6%
      // 假设抽中了一个五星，然后在随机的在五星的系统中随机抽取一个出来。
      // 大保底机制，抽到70 抽的时候，每多抽一次，抽到五星的成功率就会多百分之5.
      //  抽中一个四星的概率是13%
      // 假设抽中了一个五星，然后在随机的在星的系统中随机抽取一个出来。
      // 保底机制：如果前面九次抽奖都没有抽到四星，那么最后一次一定是四星。
      // 不抽中五星和四星则是三星
      const result = [];
      for (let i = 0; i < count; i++) {
        // 小保底机制
        state.smallPrize++;
        state.bigPrize++;
        const ranNumber = random(1, 100);

        // 十发必出一个四星

        // 出了四星就重置
        if (ranNumber <= 5) {
          state.smallPrize = 0;
        }
        // 出了五星就重置
        if (ranNumber === 1) {
          state.bigPrize = 0;
          state.bigPrizeArr = [];
          state.smallPrize = 0;
        }

        if (state.bigPrize === 90 && isBigPrize(state.bigPrize)) {
          state.bigPrize = 0;
          result.push(1);
        } else {
          if (state.smallPrize === 9 && isSmallPrize(result)) {
            state.smallPrize = 0;
            result.push(4);
            state.bigPrizeArr.push(4);
          } else {
            result.push(ranNumber);
            state.bigPrizeArr.push(ranNumber);
          }
        }
      }

      // const lastResult = state.lastResult;
      result.forEach((item) => {
        if (item <= 1 * state.userInfo.luckValue) {
          state.lastResult.push("五星");
        } else if (
          item > 2 * state.userInfo.luckValue &&
          item <= 5 * state.userInfo.luckValue
        ) {
          state.lastResult.push("四星");
        } else {
          state.lastResult.push("三星");
        }
      });
      this.commit("save");

      // 抽奖的过程不是直接去奖池里面抽，而是直接在抽到相对应的  三星奖品令牌  四星奖品令牌  五星奖品令牌  然后再去用相同的概率抽取对应登记的奖品
    },
    clearGifts(state) {
      state.prizeResult = [];
      this.commit("save");
    },
    changeGifts(state, arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "三星") {
          let threePriceNumber = state.prize.ThreeStarWeapons.length;
          let luckNumber = random(1, threePriceNumber);
          let prize = state.prize.ThreeStarWeapons[luckNumber];

          const prizeResult = { prize, star: "three" };
          state.backpackWeapons.push(prizeResult);
          state.prizeResult.push(prizeResult);
        } else if (arr[i] === "四星") {
          let arrFourStar = [
            ...state.prize.FourStarHeros,
            ...state.prize.FourStarWeapons,
          ];
          let fourPriceNumber = arrFourStar.length;
          let luckNumber = random(1, fourPriceNumber);
          let prize = arrFourStar[luckNumber];
          const prizeResult = { prize, star: "four" };
          if (state.prize.FourStarHeros.includes(prize)) {
            state.backpackHeros.push(prizeResult);
          } else {
            state.backpackWeapons.push(prizeResult);
          }
          state.prizeResult.push(prizeResult);
        } else if (arr[i] === "五星") {
          let allFiveStar = [
            ...state.prize.FiveStarHeros,
            ...state.prize.FiveStarWeapons,
          ];
          let fivePrizeNumber = allFiveStar.length;
          let luckNumber = random(1, fivePrizeNumber);
          let prize = allFiveStar[luckNumber];
          const prizeResult = { prize, star: "five" };
          if (state.prize.FiveStarHeros.includes(prize)) {
            state.backpackHeros.push(prizeResult);
          } else {
            state.backpackWeapons.push(prizeResult);
          }
          state.prizeResult.push(prizeResult);
        }
      }
      this.commit("save");
    },
    save(state) {
      localStorage.setItem("stateData", JSON.stringify(state));
    },
  },
  actions: {
    changeGifts({ commit, state }, payload) {
      commit("lotteryDraw", payload);
      commit("changeGifts", state.lastResult);
      state.lastResult = [];
    },
    clearGifts({ commit }) {
      commit("clearGifts");
    },
  },
  getters: {
    prizeResult(state) {
      return state.prizeResult;
    },
    backpackHeros(state) {
      return state.backpackHeros;
    },
    backpackWeapons(state) {
      return state.backpackWeapons;
    },
  },
});
