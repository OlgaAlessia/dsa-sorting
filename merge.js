function merge(nums1, nums2) {

    let nums = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] > nums2[index2]) {
            nums.push(nums2[index2]);
            index2++;
        } else {
            nums.push(nums1[index1]);
            index1++;
        }
    }
    while (index1 < nums1.length) {
        nums.push(nums1[index1]);
        index1++;
    }
    while (index2 < nums2.length) {
        nums.push(nums2[index2]);
        index2++;
    }

    return nums;
}

/**
 * Create small arrays with 1 - 2 elements (when the left side is done, mergeSort will start the right side)
 * the returns 
 */
function mergeSort(nums) {

    if(nums.length <= 1) return nums;

    const mid = Math.floor(nums.length/2);

    const left = mergeSort(nums.slice(0,mid));
    const right = mergeSort(nums.slice(mid));

    return merge(left, right);

}

module.exports = { merge, mergeSort };