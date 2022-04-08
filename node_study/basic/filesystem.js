const fs = require('fs').promises;

// 파일 읽기
// fs.readFile('./data/text1.txt', 'utf-8').then((data) => { console.log(data) }).catch(console.error);

// 파일 생성
// fs.writeFile('./data/text2.txt', '새로운 파일을 생성했다.').then(console.log('파일 생성완료')).catch(console.error);

// 파일에 데이터를 추가하고 파일 복사하기
// fs.appendFile('./data/text2.txt', '새로운 내용 추가하기').then(() => {
//     fs.copyFile('./data/text2.txt', './data/text3.txt').catch(console.error);
// }).catch(console.error);

// 폴더 생성
// fs.mkdir('new-folder').then(console.log('폴더 생성')).catch(console.error);

// 현재 디렉토리 읽어오기
fs.readdir('./').then(console.log).catch(console.error);