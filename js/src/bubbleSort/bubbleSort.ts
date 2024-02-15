// Time: O(n^2)
const bubbleSort = (arr: number[]) => {
    const arrToSort = [...arr];

    for (let i = arrToSort.length; i > 0; i--) {
        let didSwap = false;
        for (let j = 0; j < i - 1; j++) {
            if (arrToSort[j] > arrToSort[j + 1]) {
                [arrToSort[j], arrToSort[j + 1]] = [arrToSort[j + 1], arrToSort[j]];
                didSwap = true;
            }
        }
        if (!didSwap) break;
    }

    return arrToSort;
};

export { bubbleSort };
