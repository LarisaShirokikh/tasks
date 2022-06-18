//1. удалить пробелы из строки
function noSpace(x){
    return x = x.replace(/\s+/g, '');
 }

 //2. Завершите решение так, чтобы оно вернуло true,
 // если переданный первый аргумент (строка)
 // заканчивается вторым аргументом (также строкой).
 //Примеры:
 //Solution('abc', 'bc') // возвращает true
 //Solution('abc', 'd') // возвращает false
 function solution(str, ending){
    let i = ending.length;
    let j = str.length;
   
    while (i >= 0) {
      if (ending[i] !== str[j]) return false;
   
      i--;
      j--;
    }
   
    return true;
  }

  //3. число делится без остатка на 3 или на 5
  const number = 90;
  const isLucky = number % 3 === 0 || number % 5 === 0;

  //4. 
