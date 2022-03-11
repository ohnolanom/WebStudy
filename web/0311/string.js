// console.log('Hello');
// console.log(`안+sudsudsuds
// 녕
// 응`);

// let str = `Hello`;
// console.log(str);
// console.log(str[1]);

// 1. 요소출력
// for(let i of str) { 
//     console.log(i);
// }

// 2. 인덱스 출력
// for(let i in str) { 
//     console.log(i);
// }

// 대문자로 변환 
// console.log(str.toUpperCase());

// 소문자로 변환
// console.log(str.toLowerCase());


// let str = 'Widget with id banana 🍺 🍸 oid wid';
// string.indexOf(): 해당 단어의 인덱스 위치를 알려준다.
// console.log(str.indexOf('with'));

// string.includes
// console.log(str.includes('🍺'));

//string.startsWith, string.endsWith
// console.log(str.startsWith('Wi'));
// console.log(str.endsWith('wid'));

// 부분 문자열 추출
// 1. string.slice(), 음수 인수 허용
// let str = "stringify";
// console.log(str.slice(0, 6)); // 0~5 
// console.log(str.slice(6)); // 5~끝까지
// console.log(str.slice(-4, -1));

// 2. string.subString(), 음수 인수 허용하지 않음
// let str = "stringify";
// console.log(str.substring(2, 6)); // "ring"
// console.log(str.substring(6, 2)); // "ring"
// // slice를 사용하면 결과가 다릅니다.
// console.log(str.slice(2, 6)); // "ring" (같음)
// console.log(str.slice(6, 2)); // "" (빈 문자열)

// 3. string.substr(start index, length), 음수 인수 허용 
let str = "stringify";
console.log(str.substr(2, 5));
console.log(str.substr(-4, 2));



console.log('🍕'.length);

let arr = [ '사과', { name: '이보라' }, true, function() { console.log('안녕하세요.'); } ];
console.log(arr);
console.log(arr[3]());

let stack = ['1', '2', '3'];
stack.push(4);
console.log(stack);
stack.pop();
console.log(stack);
stack.unshift('5');
console.log(stack);
stack.shift();
console.log(stack);

let animal = ['토끼', '호랑이', '염소', '고양이'];
let animal2 = animal.toString();
console.log(animal2.split(','));