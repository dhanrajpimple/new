function moveZeroes(nums) {
  let nonZeroIndex = 0;

 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }


  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}


let nums = [0, 1, 0, 3, 12];
console.log("Input:", nums);
moveZeroes(nums);
console.log("Output:", nums);
