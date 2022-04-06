// // console
// console.log('Hi, console!'); // 개발
// console.info('info'); // 공지
// console.warn('경고'); // 경고
// console.error('에러'); // 에러

const { timeStamp } = require("console")

// // assert()는 값이 false일때만 log로 출력됨
// console.assert(2===2, '정답');
// console.assert(2===3, '오답');

// print 
// const profile = {
//     name: "seoryeong",
//     age: "24",
//     school: { name: "sangmyung"}
// }

// console.log(profile);
// console.table(profile);
// console.dir(profile, {showHidden: true, depth: 0});

// time
// console.time('time');
// for(let i = 0; i < 5; i++) {
//     i++;
// }
// console.timeEnd('time');

// node에서의 this는 global object를 의미함
// function temp1() {
//     // console.log(this);
//     console.log(this === global);
// }
// temp1();

// let temp2 = () => {
//     console.log(this);
//     console.log(this === global);
// }
// temp2();

// class Hello {
//     constructor(string) {
//         this.string = string;
//     }

//     printString() {
//         console.log(this);
//         console.log(this === global);
//     }
// }

// let hello = new Hello('안녕');
// console.log(hello);
// hello.printString();