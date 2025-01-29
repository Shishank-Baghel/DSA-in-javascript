USING SET

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
       const s = new Set(nums); 
    return s.size !== nums.length
};


method -2 (USING SORT)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};
