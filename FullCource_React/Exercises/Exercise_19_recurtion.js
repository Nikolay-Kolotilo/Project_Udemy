/* (**) Сложная задача на работу с рекурсией
Это дополнительная непростая задачка, в которой вы можете попробовать свои силы.
Такого типа задачи часто дают на собеседованиях.
Задание:
Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, 
включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. 
Чтобы понять задачу детальнее, давайте рассмотрим примеры:
deepCount([1, 5, 3]) => 3
deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент 
    был посчитан сам + его внутренность)
deepCount([1, 2, [3, 4, [5]]]) => 7
deepCount([]) => 0
deepCount([[[[[[[[[]]]]]]]]]) => 8
*/
// Своё решене.
// let count = 0;
// function deepCount(a) {
//     if (Array.isArray(a)) {
//         for (let i = 0; i < a.length; i++) {
//             // let count = 0;
//             if (Array.isArray(a[i])) {
            
//                 // console.log(count);
//                 count += 1;
//                 // console.log(count);
//                 for (let subArray of a[i]) {
//                     count += 1;
//                     // console.log(count);
//                     deepCount(subArray);
//                 }
//             } else {
//                 // console.log('false');
//                 count += 1;
//             }                  
//         } return count;
//     } else {
//         return count;
//     }       
    
// }
// console.log(deepCount([]));

// console.log([[[[[]]]]].length);
// console.log(deepCount(["1", 5, "3", ["10"]]));

// console.log('10'.length);

let count = 0;

function deepCount(a) {
    // let count = a.length;

    // let count = 0;
    if (a.length <= 1 && !Array.isArray(a[0])) {
        count += a.length;
        return count;
    } else {
        count += a.length;
        // let i = 0;
        for (let subArray of a) {
            // console.log(count);
            deepCount(subArray);
            // console.log('false');
            return count;
        }
    }
}
// console.log(count);
console.log(deepCount([1, 2, [3, 4, [5]]]));
// console.log([""].length);
