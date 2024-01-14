function insertionSort(nums) {
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i; j >= 0; j--) {
            if (nums[j] < nums[j-1]) {
                let tmp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = tmp;
            }
        }
    }
    return nums;
}

module.exports = insertionSort;