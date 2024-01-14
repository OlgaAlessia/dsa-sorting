/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp;
}

function pivot(nums, start = 0, end = nums.length - 1) {
    const pivotEl = nums[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivotEl > nums[i]) {
            swapIdx++;
            swap(nums, swapIdx, i);
        }
    }
    swap(nums, start, swapIdx)
    return swapIdx
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(nums, start = 0, end = nums.length - 1) {
    if (start < end) {

        // The partitioning index is represented by pivotEl.
        let pivotEl = pivot(nums, start, end);

        // Separately sort elements before and after pivot
        quickSort(nums, start, pivotEl - 1);
        quickSort(nums, pivotEl + 1, end);

    }
    return nums;
}

module.exports = { pivot, quickSort };