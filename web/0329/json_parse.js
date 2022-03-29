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

json = JSON.stringify(cat);
console.log(json); // {"name":"kitty","color":"white","size":null,"birthDate":"2022-01-10T14:13:45.244Z"}

// const obj = JSON.parse(json);
// console.log(obj);

const obj = JSON.parse(json, (key, value) => {
 	console.log(`key: ${key}, value: ${value}`);
  	return key === 'birthDate' ? new Date(value) : value;
});
/* key: name, value: kitty
key: color, value: white
key: size, value: null
key: birthDate, value: 2022-01-10T14:15:55.973Z
key: , value: [object Object] */

console.log(obj); // {name: 'kitty', color: 'white', size: null, birthDate: Mon Jan 10 2022 23:15:55 GMT+0900 (한국 표준시)}

cat.grooming(); // kitty is grooming!

console.log(cat.birthDate.getDate()); // 10
console.log(obj.birthDate.getDate());