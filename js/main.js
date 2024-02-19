let circle = document.querySelector("#circle");
let article = circle.querySelectorAll("article");

// of 는 자바스크립트에서 사용되는 반복문 (유사 객체를 반복하여 가져옴)
for (let el of article) {
    // el은 article에 진입했을때 이벤트 실행 리스너 정의
    el.addEventListener("mouseenter", e => {
        // e는 이벤트를 의미
        // animationPlayState = "paused"; - 일시중지를 의미함
        circle.style.animationPlayState = "paused";
        // paused(중지)  running(재생)
    });
    el.addEventListener("mouseleave", e => {
        circle.style.animationPlayState = "running";
    });
}

/* circle 변수저장, article 변수저장
각 요소에 반복문 실행
article에 마우스 올라가면 애니메이션 중지 
벗어나면 애니메이션 다시 실행 */