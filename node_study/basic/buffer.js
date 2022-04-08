// const data = Buffer.from('hello world');
// console.log(data);
// console.log(data.length);
// console.log(data[0]);
// console.log(data.toString()); // utf8

// 생성
const buf = Buffer.alloc(2); 
console.log(buf);
buf[0] = 72;
buf[1] = 105;
console.log(buf.toString());