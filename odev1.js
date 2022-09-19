let arr1 = ["2", "a", "3", 3, 4, 3, 5, 5];
let arr2 = ["c", "c", "h", 1, 1, 1, 4];
let arr3 = [
  { name: "ali", id: 221 },
  { name: "veli", id: 343 },
  { name: "konya", id: 333 },
  { name: "ali", id: 664 },
  { name: "selim", id: 112 },
];
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2];

// Açıklamalar alt satırlara yazılmıştır.

arr1.unshift("a");
console.log(arr1);
// 1- arr1 arrayinin başına unshift yöntemi ile 'a' elemanını ekledik.

arr1.push(6);
console.log(arr1);
// 2-arr1 arrayinin başına push yöntemi ile 6 elemanını ekledik.

arr1.pop();
console.log(arr1);
// 3-arr1 arrayinin sonundan pop yöntemi ile son elemanı sildik.

arr1.shift();
console.log(arr1);
// 4-arr1 arrayinin başından shift yöntemi ile son elemanı sildik.

const arrConcat = arr1.concat(arr2);
console.log(arrConcat);
// 5.1- arr1 ile arr2 arraylerini concat yöntemi ile birleştirdik.

const all = [...arr1, ...arr2];
console.log(all);
// 5.2- arr1 ile arr2 arraylerini spread operator kullanarak birleştirdik.

let myFunction = (arr, element) => arr.includes(elemet);
console.log(myFunction(arr2, "h"));
// 6-inculudes yöntemi ile array içinde aradığımız  elemanını olup olmadığını sorgulattık.

console.log(arr2.indexOf("h"));
// 7-indexOf yöntemi ile 'h' elamanın indexini tespit ettik.

let Newarr2 = arr2.slice(0, 3);
console.log(Newarr2);
// 8.1-slice yöntemi ile arr2 arrayinden 3 elamanlık bir parça aldık.

arr2.splice(2, 4);
console.log(arr2);
// 8.2-splice yöntemi ile  arr2 arrayinden 4 elaman sildik.

let sumNumber = (arr) => {
  const filterArr = arr.filter((element) => typeof element === "number");
  const sum = filterArr.reduce((acc, num) => acc + num, 0);
  return sum;
};
console.log(sumNumber(arr1));
// 9- arr1 arrayinde önce filter yöntemi kullanarak number tipindeki elemanları bıraktık
// ardınadan reduce ile kalan number tipindeki elemanları topladık.

const allString = arr1.map((element) => element.toString());
console.log(allString);
// 10- map döngüsü yardımı ile arr1 arrayindeki her elamanı stringe çevirdik.

const foundId = arr3.find((element) => element.id === 221);
console.log(foundId);
// 11- find yöntemi ile arr3 arayinde 221 id li elamanı bulduk.

const foundName = arr3.filter((element) => element.name === "ali");
console.log(foundName);
// 12- filter yöntemi ile arr3 arrayinde name değeri ali olan elamanları bulduk.

let sumId = arr3.reduce((acc, item) => acc + item.id, 0);
console.log(sumId);
// 13-reduce yöntemi yardımı ile arr3 aryindeki id değerlerini topladık.
