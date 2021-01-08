//! 課題07-1. 文字列オブジェクトのメソッド
const firstName = "加藤"
const lastName = "由樹"
console.log(firstName.concat('', lastName, 'と申します。')); // => 加藤由樹と申します。


const str = "あけましておめでとうございます"
const chars = str.split("");
console.log(chars[3]); // => し


const greet = "  おはようございます。　　"
console.log(greet); // => "  おはようございます。　　"
console.log(greet.trim()); // => "おはようございます。"



//!課題07-2. 配列オブジェクトのメソッド
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3); // => [1, 2, 3, 4, 5, 6]


const numbers = [100, 34, 58, 29, 47];
console.log(numbers.includes(100)); // => true
console.log(numbers.includes(50)); // => false


const phoneNumber = [122, 3857, 2894]
console.log(phoneNumber.join('-')); // => 122-3857-2894