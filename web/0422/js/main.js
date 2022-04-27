let windowWidth, windowHeight;

window.onload = function() {
    const cards = document.querySelectorAll('.cardItem')
    const random_button = document.querySelectorAll('button')[0];
    const reset_button = document.querySelectorAll('button')[1];

    random_button.addEventListener('click', function(event) {
        cardRandom();
    });

    reset_button.addEventListener('click', function(event) {
        cardSetting();
    });

    window.addEventListener('resize', function() {
        resize();        
    });

    function resize() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        console.log(windowWidth, windowHeight);
        cardSetting();
    }

    function cardSetting() {
        cards.forEach(function(item, i) {
            // console.log(item);
            TweenMax.to(item, 1, {
                top: windowHeight / 2 - (i*40),
                left: windowWidth / 2 + (i*40 - 200),
                rotation: 0,
                ease: Power2.easeInOut,
                delay: i*.2
            })
        })
    }

    function cardRandom() {
        cards.forEach(function(item, i) {
            TweenMax.to(item, 1, {
                top: Math.random() * windowHeight,
                left: Math.random() * windowWidth,
                rotation: Math.random() * 180,
                ease: Power4.easeInOut,
                delay: i*.1
            })
        })
    }

    resize();
}