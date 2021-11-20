console.log('Задание 7')
function reverseArray(array){
    var nums=[];
    for (var i=array.length; i>0;i--)
        nums.push(array.pop());
    return nums;
}
function reverseArrayInPlace(array){
    var nums2=[]
    for (var i=array.length;i>0;i--){
        nums2.push(array.pop());
        //удаляет последний элемент, добавляет его в начало
    }
    for (var j=nums2.length;j>0;j--){
        array.unshift(nums2.pop()); 
        //добавляеет элементы в начало
    }
    return array;
}
console.log('Изначальный массив: [1,2,3,4]')
console.log(reverseArray([1,2,3,4]));

var newarray=[1,2,3,4,5,6];
reverseArrayInPlace(newarray);
console.log('Изначальный массив: [1,2,3,4,5,6]')
console.log(newarray);