
window.isHistoryAnimationFinished = true;
let triggerFirstAnimation = true;
var targetHistory = $('#history-section')[0];
var options = {
    threshold: 0.75
};

const getBaskets = (year) => { return document.querySelectorAll(`.basket-${year} svg`); };

const getHistoryItemsOffset = () => {
    var offsetLeft = Array.from(document.querySelectorAll(".active .item-tabs:not(.not-visible)")).map(item => (item.getBoundingClientRect().left + (item.offsetWidth / 2)));
    
    //re-order offsets from layers-based history points to in-row baskets;  
    var straightOffsetLeft = [];
    if (offsetLeft.length === 5) straightOffsetLeft = [offsetLeft[0], offsetLeft[3], offsetLeft[1], offsetLeft[4], offsetLeft[2]];
    else if (offsetLeft.length === 4) straightOffsetLeft = [offsetLeft[0], offsetLeft[3], offsetLeft[1], offsetLeft[2]];
    else straightOffsetLeft = offsetLeft;

    var year = parseInt(document.querySelector(".buttons-tabs .tablinks.active").dataset.year);
    var basketsContainers = document.querySelectorAll(".basket-" + year);
    var basketContainerOffset = document.querySelector(".baskets").getBoundingClientRect().left;
    Array.from(basketsContainers).forEach((element, index) => {
        element.style.left = - basketContainerOffset + straightOffsetLeft[index] + 'px';
    });
};

function clearParams(svgSet) {
    TweenLite.set(
        svgSet,
        { clearProps: 'all' }
    );
}

function forwardBaskets(svgSet) {
    let timeline = new TimelineMax();

    Array.from(svgSet).map((basket, index) => {
        var basketTween = TweenLite
            .to(basket, (1 - index * 0.2), {
                x: 0,
                delay: index === 0 ? 0 : -1 + index * 0.2,
                ease: Power0.easeNone,
                onComplete: () => {
                    if (index == svgSet.length - 1) {
                        isHistoryAnimationFinished = true;
                    }
                }
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
                x: -4000,
                delay: 0 - index * 0.2,
                ease: Power0.easeNone,
                onComplete: () => {
                    if (index == svgSet.length - 1) {
                        clearParams(svgSet);
                    }
                }
            });
        timeline.add(basketTween);
        return basketTween;
    });
}


var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && triggerFirstAnimation) {
            triggerFirstAnimation = false;
            getHistoryItemsOffset();
            var year = parseInt(document.querySelector(".buttons-tabs .tablinks.active").dataset.year);
            forwardBaskets(getBaskets(year));
            isHistoryAnimationFinished = false;
        }
    });
}, options);



if (targetHistory && window.innerWidth > 1109) {
    observer.observe(targetHistory);
    
}

function invokeHistoryAnimation(prevYear, newYear) {
    isHistoryAnimationFinished = false;
    getHistoryItemsOffset();
    var prevBaskets = getBaskets(prevYear);
    var newBaskets = getBaskets(newYear);
    backBaskets(prevBaskets)
    forwardBaskets(newBaskets)
};