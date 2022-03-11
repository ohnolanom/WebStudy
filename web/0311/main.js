window.onload = function() {
    let helloButton = document.getElementById('hello-button');

    helloButton.addEventListener('click', function() {
        alert('버튼이 눌렸다!');
    });
}

(function() {
    let helloButton = document.getElementById('hello-button');

    helloButton.addEventListener('click', function() {
        alert('버튼이 눌렸다!');
    });
})();

function printHello() {
    console.log('Hello');
}

printHello();

