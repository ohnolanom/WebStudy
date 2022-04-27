window.onload = function() {
    const body = document.querySelector('body');
    const everyButton = document.querySelectorAll('button');
    // const pageNumber = 0;
    const page1 = document.querySelectorAll('button')[0];
    // const page2 = document.querySelectorAll('button')[1];
    const section = document.querySelector('section');

    let windowWidth, windowHeight;
    const backgroundColorArr = ["#2eccc4", "#20a9ea"];

    TweenMax.from('h1', 1, {
        top: -100,
        autoAlpha: 0,
        ease: Power3.easeOut
    })

    everyButton.forEach(function(item, i){
        TweenMax.from(item, .4, {
            top : 100,
            autoAlpha : 0,
            ease : Power3.easeInOut, 
            delay : i * .1 + 1,
        })
    })

    TweenMax.set('section', {perspective: 400});

    
    // 글자 100개 생성
    let item; 
    
    // <div class="textItem"> </div> 100개 
    let totalNumber = 100;

    for(let i = 0; i < totalNumber; i++) {
        item = document.createElement('div'); // <div>
        item.setAttribute('class', 'textItem'); // <div class='textItem'>
        item.style.top = window.innerHeight / 2 + "px";
        item.style.left = window.innerWidth / 2 + "px";
        item.innerHTML = i; // <div class='textItem>i</div>
        section.appendChild(item);
    }

    let textItem = document.querySelectorAll('.textItem');
    

    page1.addEventListener('click', function(event) {
        motionSetting();
    });

    // page2.addEventListener('click', function(event) {
    //     console.log('page2');
    // });

    function motionSetting() {
        // 배경색 변화
        body.style.background = backgroundColorArr[0];
        page1.classList.add("active");

        TweenMax.killTweensOf(textItem);

        // 글씨 흩뿌리기
        textItem.forEach(function(item, i) {
            // TweenMax.killTweensOf(item);
            TweenMax.to(item, 1, {
                top : Math.random() * (windowHeight - 150) + 60,
                left : Math.random() * (windowWidth - 80) + 20, 
                autoAlpha: "random(.1, 1)",
                scale: .5,
                ease: Power4.easenOut,
                delay: "random(0, .5)"
            })
        })
    }

    function resize() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        motionSetting()
    }

    resize();

}