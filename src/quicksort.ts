function quicksort(arr : number[]) : number[] {
    if (arr.length <= 1) 
        return arr
    let flag = arr[Math.floor(arr.length / 2)],
        left = [],
        right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < flag) {
            left.push(arr[i]);
        } else if (arr[i] > flag) {
            right.push(arr[i]);
        }
    }

    return quicksort(left).concat([flag], quicksort(right))
}
