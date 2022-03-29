// 1. 불리언타입
// let jsonBool = JSON.stringify(true);
// console.log(jsonBool); // true
// console.log(typeof(jsonBool));

// 2. 배열타입
// jsonArr = JSON.stringify(['apple', 'banana']);
// console.log(jsonArr); // ["apple", "banana"]
// console.log(typeof(jsonArr));

// 3.객체 타입
// 단, 함수나 JavaScript만의 Symbol은 JSON으로 변환되지 않는다. 
const cat = {
	name: 'kitty',
  	color: 'white',
  	size: null,
  	birthDate: new Date(),
  	symbol: Symbol("id"),
  	grooming: function() { 
    	console.log(`${this.name} is grooming!`);
    },  
}

jsonObj = JSON.stringify(cat);
console.log(jsonObj); // {"name":"kitty","color":"white","size":null,"birthDate":"2022-01-10T13:53:24.756Z"}

jsonChoose = JSON.stringify(cat, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'cutiy' : value;  
});
/* key: , value: [object Object]
key: name, value: kitty
key: color, value: white
key: size, value: null
key: birthDate, value: 2022-01-10T13:53:24.756Z */

console.log(jsonChoose);