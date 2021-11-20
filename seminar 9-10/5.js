console.log('Задание 5 - считаем бобы')
function countBs(string, ch){
    let count = 0;
    for (let i=0; i<string.length;  i++)
        if (string.charAt(i)==ch)
        count++;
    return count;
}


console.log('В строке "гидротрансформатор"',countBs('гидротрансформатор ','р'),'р')