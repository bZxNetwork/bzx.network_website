let basket1 = $('.basket-1 svg');
let basket2 = $('.basket-2 svg');
let basket3 = $('.basket-3 svg');
let basket4 = $('.basket-4 svg');
let basket5 = $('.basket-5 svg');
let basket6 = $('.basket-6 svg');
let basket7 = $('.basket-7 svg');
let basket8 = $('.basket-8 svg');
let basket9 = $('.basket-9 svg');
let basket10 = $('.basket-10 svg');
let basket11 = $('.basket-11 svg');
let basket12 = $('.basket-12 svg');

let baskets2019 = document.querySelectorAll(".basket-2019 svg");
let baskets2018 = document.querySelectorAll(".basket-2018 svg");
let baskets2017 = document.querySelectorAll(".basket-2017 svg");
var distance = {
    0: 0,
    1: 144,
    2: 144 + 117,
    3: 144 + 117 + 116,//117
    4: 144 + 117 + 116 + 145
}

const getHistoryItemsOffset = () => {
    var offsetLeft = Array.from(document.querySelectorAll(".active .item-tabs")).map(item => (item.getBoundingClientRect().left + (item.offsetWidth / 2)));
    var straightOffsetLeft = [];
    if (offsetLeft.length === 5) straightOffsetLeft = [offsetLeft[0], offsetLeft[3], offsetLeft[1], offsetLeft[4], offsetLeft[2]];
    if (offsetLeft.length === 4) straightOffsetLeft = [offsetLeft[0], offsetLeft[3], offsetLeft[1], offsetLeft[2]];
    if (offsetLeft.length === 3) straightOffsetLeft = [offsetLeft[0], offsetLeft[1], offsetLeft[2]];
    if (offsetLeft.length === 2) straightOffsetLeft = [offsetLeft[0], offsetLeft[1]];
    if (offsetLeft.length === 1) straightOffsetLeft = [offsetLeft[0]];

    var year = parseInt(document.querySelector(".buttons-tabs .tablinks.active").dataset.year);
    var baskets = document.querySelectorAll(".basket-" + year);
    var basketContainerOffset = document.querySelector(".baskets").getBoundingClientRect().left;
    Array.from(baskets).forEach((element, index) => {
        element.style.left = - basketContainerOffset + straightOffsetLeft[index] + 'px';
    });
    return [offsetLeft[0], offsetLeft[3], offsetLeft[1], offsetLeft[4], offsetLeft[2]];
};
let basket2019Tweens;

let basket1Tween;
let basket2Tween;
let basket3Tween;
let basket4Tween;
let basket5Tween;
let basket6Tween;
let basket7Tween;
let basket8Tween;
let basket9Tween;
let basket10Tween;
let basket11Tween;
let basket12Tween;

let currentlyButton;
let count = true;

function clearFirstParams() {
    TweenLite.set(
        baskets2019,
        { clearProps: 'all' }
    );
    Array.from(baskets2019).forEach(item => item.removeAttribute('style'))

}
// function clearFirstParams() {
//     TweenLite.set(
//         [
//             basket1,
//             basket2,
//             basket3,
//             basket4,
//             basket5
//         ],
//         { clearProps: 'all' }
//     );
// }
function clearParams(svgSet) {
    TweenLite.set(
        svgSet,
        { clearProps: 'all' }
    );
    Array.from(svgSet).forEach(item => item.removeAttribute('style'))
}
function forwardBaskets(svgSet) {
    let timeline = new TimelineMax();

    Array.from(svgSet).map((basket, index) => {
        var basketTween = TweenLite
            .to(basket, (1 - index * 0.2), {
                x: 0,
                delay: index * 0.2,
                ease: Power0.easeNone
            });
        timeline.add(basketTween);
        return basketTween;
    });
}
function backBaskets(svgSet) {
    let timeline = new TimelineLite();

    Array.from(svgSet).forEach((basket, index) => {
        var basketTween = TweenLite
            .to(basket, 0.2 + index * 0.2, {
                x: -2000,
                delay: 0 - index * 0.2,
                ease: Power0.easeNone,
                onComplete: () => {
                    if (index == svgSet.length - 1)
                        // clearFirstParams();
                        clearParams(svgSet);

                }
            });
        timeline.add(basketTween);
        return basketTween;
    });
}


function clearSecondParams() {
    TweenLite.set(
        baskets2018,
        { clearProps: 'all' }
    );
    Array.from(baskets2018).forEach(item => item.removeAttribute('style'))
}
function clearThirdParams() {
    TweenLite.set(
        baskets2017,
        { clearProps: 'all' }
    );
    Array.from(baskets2017).forEach(item => item.removeAttribute('style'))

}
function forwardFirst() {
    let timeline = new TimelineMax();

    basket2019Tweens = Array.from(baskets2019).map((basket, index) => {
        var basketTween = TweenLite
            .to(basket, (1 - index * 0.2), {
                x: 0,
                delay: index * 0.2,
                ease: Power0.easeNone
            });
        timeline.add(basketTween);
        return basketTween;
    });
}
function backFirst() {
    let timeline = new TimelineLite();

    Array.from(baskets2019).forEach((basket, index) => {
        var basketTween = TweenLite
            .to(basket, 0.2 + index * 0.2, {
                x: -2000,
                delay: 0 - index * 0.2,
                ease: Power0.easeNone,
                onComplete: () => {
                    if (index == baskets2019.length - 1)
                        clearFirstParams();
                }
            });
        timeline.add(basketTween);
        return basketTween;
    });
}
function forwardSecond() {
    let timeline = new TimelineMax();

    basket2018Tweens = Array.from(baskets2018).map((basket, index) => {
        var basketTween = TweenLite
            .to(basket, (1 - index * 0.2), {
                x: 0,
                delay: index * 0.2,
                ease: Power0.easeNone
            });
        timeline.add(basketTween);
        return basketTween;
    });
}
function backSecond(callback) {
    let timeline = new TimelineMax();

    basket2018Tweens = Array.from(baskets2018).map((basket, index) => {
        basketTween = TweenLite
            .to(basket, 0.2 + index * 0.2, {
                x: -2000,
                delay: 0 - index * 0.2,
                ease: Power0.easeNone,
                onComplete: () => {
                    if (index == baskets2018.length - 1) {
                        clearSecondParams();
                        // callback();
                    }
                }
            });
        timeline.add(basketTween);
        return basketTween;
    });
}
function forwardThird() {
    let timeline = new TimelineMax();

    basket2017Tweens = Array.from(baskets2017).map((basket, index) => {
        var basketTween = TweenLite
            .to(basket, (1 - index * 0.2), {
                x: 0,
                delay: index * 0.2,
                ease: Power0.easeNone
            });
        timeline.add(basketTween);
        return basketTween;
    });
}
function backThird(callback) {
    let timeline = new TimelineMax();

    basket2017Tweens = Array.from(baskets2017).map((basket, index) => {
        var basketTween = TweenLite
            .to(basket, 0.2 + index * 0.2, {
                x: -2000,
                delay: 0 - index * 0.2,
                ease: Power0.easeNone,
                onComplete: () => {
                    if (index == baskets2017.length - 1) {
                        clearThirdParams();
                        // callback();
                    }
                }
            });
        timeline.add(basketTween);
        return basketTween;
    });
}

var targetHistory = $('#history-section')[0];
var options = {
    threshold: 0.75
};

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && count) {
            count = false;
            currentlyButton = 1;
            forwardBaskets(baskets2019);
        }
    });
}, options);

if (targetHistory && window.innerWidth > 1109) {
    observer.observe(targetHistory);
    getHistoryItemsOffset();

    $('#button2017').click(function () {
        // clearFirstParams();
        // clearSecondParams();
        // clearThirdParams();
        switch (currentlyButton) {
            case 1:
                backBaskets(baskets2019)
                forwardBaskets(baskets2017)
                // backFirst();
                // forwardThird();
                break;
            case 2:
                backBaskets(baskets2018)
                forwardBaskets(baskets2017)
                // backSecond();
                // forwardThird()
                break;

            default:
        }
        currentlyButton = 3;
    });
    $('#button2018').click(function () {
        // clearFirstParams();
        // clearSecondParams();
        // clearThirdParams();
        switch (currentlyButton) {
            case 3:
                backBaskets(baskets2017)
                forwardBaskets(baskets2018)

                // backThird();
                // forwardSecond();
                break;
            case 1:
                backBaskets(baskets2019)
                forwardBaskets(baskets2018)

                // backFirst();
                // forwardSecond();
                break;
            default:
        }
        currentlyButton = 2;
    });
    $('#button2019').click(function () {
        // clearFirstParams();
        // clearSecondParams();
        // clearThirdParams();
        switch (currentlyButton) {
            case 2:
                backBaskets(baskets2018)
                forwardBaskets(baskets2019)

                // backSecond();
                // forwardFirst();
                break;
            case 3:
                backBaskets(baskets2017)
                forwardBaskets(baskets2019)

                // backThird();
                // forwardFirst();
                break;
            default:

        }
        currentlyButton = 1;
    })
}