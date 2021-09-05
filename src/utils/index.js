function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function isSmallPrize(arr) {
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    // 检测数组里面已经有四星了，所有不触发保底机制。
    if (arr[i] < 5) {
      return false;
    }
  }
  return true;
}

function isBigPrize(arr) {
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    // 检测数组里面已经有四星了，所有不触发保底机制。
    if (arr[i] === 1) {
      return false;
    }
  }
  return true;
}

export { random, isSmallPrize, isBigPrize };
