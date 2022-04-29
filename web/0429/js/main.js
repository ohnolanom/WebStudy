window.onload = function() {
    const body = document.querySelector('body'); /*배경 색 변경을 위해서 들고옴*/
    const everyButton = document.querySelectorAll('button');   
    const section = document.querySelector('section');
    let pageNumber = 0; //No.1 No.2 다른 애니매이션, 페이지 2개 필요
    let windowWidth, windowHeight;
    const bacgroundColorArr = ["#2eccc4","#20a9ea"];

    //글자 100개 생성
    /* 문자도 가능 arr 사용하여*/
    let item;    
    let totalNum = 100;
    for(let i=0; i<totalNum; i++){
        item = document.createElement('div'); // <div></div> //createElement: 특정 테그 만들수 있다
        item.setAttribute('class', 'textItem'); //  <div class="textItem"></div>  //setAttribute: 테그에 클래스 값 넣어줌
        item.style.top = window.innerHeight / 2 + "px"   // 화면 위에서 얼마나 떨어져있는지 설정 
        item.style.left = window.innerWidth / 2 + "px"   // js에서 css 줄 때는 단위 필수필요
        // <div class="textItem" style="px~~"></div>
        item.innerHTML = i; //<div class="textItem" style="px~~">i</div>  // html 값
        section.appendChild(item); // appendChild해야지 웹페이지에 보임
    }

    // 100개의 숫자 잡기
    let textItem = document.querySelectorAll('.textItem');

    // h1효과
    TweenMax.from('h1', 1, {    
        top: -100,
        autoAlpha: 0,
        ease: Power3.easeOut
    })

    // 버튼 효과
    everyButton.forEach(function(item, i){
        TweenMax.from(item, 1, {    
            top: 100,
            autoAlpha: 0,
            ease: Power3.easeOut,
            delay: i*.1+1 // 0번째 버튼 1초뒤에, 1번쨰 버튼 .1+1초 뒤에
        })
    })

    /* */
    TweenMax.set('section', {perspective:400})

    // 버튼 이벤트
    for(let i=0; i<everyButton.length; i++){
        (function(idx) {    // 선언함과 동시에 실행, 이름없음, 익명함수
            everyButton[idx].onclick = function() {
                pageNumber = idx;
                motionSetting();
            }
        })(i);
    }

    function motionSetting(){
        /* 페이지 배경 색 바꿈 */
        body.style.background = bacgroundColorArr[pageNumber];

        for(let i = 0; i<everyButton.length; i++){
            if(pageNumber == i){    // 0==0
                // 버튼활성
                everyButton[pageNumber].classList.add("active"); /* 활성화 되었는가 */
                /*classList : No1의 클래스 값에 접근
                .add, .remove 함수 사용*/
            } else {
                everyButton[i].classList.remove("active");
            }
        }
       
       
        TweenMax.killTweensOf(textItem);   //숫자들 안겹치게, 위치중복 안되게

        if(pageNumber == 0){
            /* 글씨 흩뿌리기 / 맨 첨에 모였다가 퍼지기*/
            textItem.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top: Math.random()* (windowHeight-150)+60, // +60 이런건 화면 각 여백 크기
                    left: Math.random()* (windowWidth-80)+20, 
                    autoAlpha: "random(.1, 1)", //autoAlpha 알아보기, 투명도 관련인듯?
                    scale: .5,  // 글자 사이즈 줄어들게 함
                    ease: Power4.easeOut,
                    delay: "random(0, .5)"
                })
            })

        } else if(pageNumber == 1){
            textItem.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top: windowHeight / 2 + Math.sin( i / 3 ) * 40,
                    left: i * 20, 
                    autoAlpha: 1, // 투명도
                    scale: .4,  // 글자 사이즈
                    ease: Power4.easeOut,
                    delay: i* .01
                })
            })

        }
     

    }

    window.addEventListener('resize', function(){
        resize();   // 화면 변할때마다 resize 함수 실행하도록!!
    });

    function resize(){
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        motionSetting();
    }

    resize();


}