// console.log('1');
// // setTimeout(function() { console.log('2');}, 1000); 
// setTimeout(() => console.log('2'), 1000); // 1초 뒤에 2가 출력된다.
// console.log('3');

// 동기 콜백
// function printImmediately(write) { // 함수의 선언
// 	write();
// }

// printImmediately(() => console.log('hello'));


// // 비동기 콜백
// function printWithDelay(print, timeout) { // setTimeout을 wrapping 하고 있는 함수 
//     setTimeout(print, timeout);  
// }

// printWithDelay(() => console.log('async callback'), 2000);


class UserStorage {  
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === 'muz' && password === 'velogs')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'));
        }
      }, 2000);
    }
  
    // 성공 시 사용자의 데이터를 받아서 사용자의 역할을 서버에게 요청해서 받아옴
    getRoles(user, onSuccess, onError) { 
      setTimeout(() => {
        if (user === 'muz') {
          onSuccess({ name: 'muz', role: 'admin' });
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
    }
  }
  
  const userStorage = new UserStorage();
  const id = prompt('enter your id');
  const password = prompt('enter your password');
  userStorage.loginUser(
    id,
    password,
    user => {
      userStorage.getRoles(
        user,
        userWithRole => {
          console.log(
            `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
          );
        },
        error => {
          console.log(error);
        }
      );
    },
    error => {
      console.log(error);
    }
  );                               