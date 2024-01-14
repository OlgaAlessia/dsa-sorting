function selectionSort(nums) {

    let len = nums.length;
    let minPos;

    for (let i = 0; i < len; i++) {
        min = nums[i];
        minPos = i;
        for (let j = i + 1; j < len; j++) {
            if (min > nums[j]) {
                min = nums[j];
                minPos = j;
            }
        }
        let tmp = nums[minPos];
        nums[minPos] = nums[i];
        nums[i] = tmp;
    }
    return nums;
}

module.exports = selectionSort;