//1. Объявите и инициализируйте переменную total равным 0.
// Используйте цикл for, чтобы добавить значение 
//каждого элемента массива myArr к общему количеству.

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = myArr.length - 1; i >= 0; i--) {
  total += myArr[i];;
} 

//2. Вернуть произведение всех чисел в массиве.
function multiplyAll(arr) {
    let product = 1;
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    return product;
  }
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  //3. Измените цикл while в коде на цикл do... while, 
  //чтобы цикл вводил только число 10 в myArray, 
  //и был = 11, когда  код закончит работу.
const myArray = [];
let i = 10;
  do {
    myArray.push(i);
    i++;
 } while (i <= 10); 
