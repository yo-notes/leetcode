//===== EASY 模式

// NUM: 001
/**
 *  解法 1，双重循环
 * @param {*} nums
 * @param {*} target
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * 解法 2，字典
 * @param {*} nums
 * @param {*} target
 */
var twoSum = function(nums, target) {
  const dict = new Map();
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (dict.has(another)) {
      return [i, dict.get(another)];
    } else {
      dict.set(nums[i], i);
    }
  }
};
