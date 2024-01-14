function bubbleSort(arr) {

    let isSwapped;
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        isSwapped = false;

        for (let j = 0; j < (len - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {

                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }

    return arr;
}

module.exports = bubbleSort;