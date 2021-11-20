console.log('Задание 6 - сумма диапазона')
function range(start,end,step){
    if (step==null) step==1;
    let nums=[];
    if (step>0) {
        for (let i=start; i<=end; i+=step)
            nums.push(i);
        }
    else {
        for (let i=start; i>=end; i+=step)
            nums.push(i);
        }
    return nums;
}

function sum(nums) {
    let total=0;
    for (let i=0; i<nums.length; i++)
        total+=nums[i];
    return total;
}
console.log('сумма элементов =', sum(range(1,10,1)));
console.log('все числа из диапазона 1-10 с шагом 2',range(1,10,2));
console.log('работа отрицательного шага:',range(5,2,-1));