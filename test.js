// 排序算法

//TODO 冒泡排序 时间复杂度O(n2)
// 冒泡排序就是n次遍历，每一次遍历就交换两个元素
// 每一次遍历后，就能把大的往后排
function sort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
            }
        }
    }
    return array;
}
// TODO 选择排序 O(n2)
// 是一种简单直观的排序算法。它的工作原理：
// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
// 然后，再从剩余未排序元素中继续寻找最小（大）元素，
// 然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。
function sort1(array) {
    let length = array.length
    for (let i = 0; i < length; i++) {
        let minindex = i;
        for (let j = i; j < length; j++) {
            if (array[j] < array[minindex])
                minindex = j;
        }
        let temp = array[minindex];
        array[minindex] = array[i];
        array[i] = temp;
    }
    return array;
}
// TODO 插入排序 O(n2)
// 
function sort2(array) {
    let current;
    for (let i = 0; i < array.length; i++) {
        current = array[i + 1]
        let preIndex = i;
        while (preIndex >= 0 && current < array[preIndex]) {
            array[preIndex + 1] = array[preIndex];
            preIndex--;
        }
        array[preIndex + 1] = current;
    }
    return array;
}

// TODO 快速排序
function sort3(arr) {
    if (arr.length <= 1) { return arr; }
    //基准位置（理论上可任意选取）
    var pivotIndex = Math.floor(arr.length / 2);   
    //基准数,并且从原数组中删除
    var pivot = arr.splice(pivotIndex, 1)[0];  
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    //链接左数组、基准数构成的数组、右数组
    return sort3(left).concat([pivot], sort3(right));  
};
console.log(sort3([1, 8, 2, 5, 9, 10]))