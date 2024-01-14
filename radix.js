function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    return num.toString().length;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {

    let maxDigit = mostDigits(nums);
    for (let d = 0; d < maxDigit; d++) {
        let buckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let digit = getDigit(num, d);
            buckets[digit].push(num);
        }

        nums = [].concat(...buckets);

    }
    return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };