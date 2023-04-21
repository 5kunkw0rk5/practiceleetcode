const nums: number[] = [2, 5, 7, 8, 9];
const target = 11;
const calculate2sum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        const sum = nums[i] + nums[j]
        if (sum === target){
            return [i,j]
        }
    }
  }
  return [];
};

console.log(calculate2sum(nums, target))
