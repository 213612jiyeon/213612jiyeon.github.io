const titleLinks = document.querySelectorAll('.title-box ul li a');

titleLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        titleLinks.forEach(btn => {
            btn.classList.remove('active');
        });

        link.classList.add('active');
        event.preventDefault();

        const currentRealIndex = swiperMain.realIndex;

        if (index > currentRealIndex) {
            swiperMain.slideTo(swiperMain.activeIndex + (index - currentRealIndex));
        } else if (index < currentRealIndex) {
            swiperMain.slideTo(swiperMain.activeIndex - (currentRealIndex - index));
        }
    });
});

const Language = document.querySelectorAll('.language');
const language_setting = document.querySelectorAll('.language-setting');
const language_select = document.querySelectorAll('.language-select');

Language.forEach(function(el){
    el.addEventListener('click', function(event) {
        // 이벤트매개변수.preventDefault()
        // HTML 의 href값을 차단
        event.preventDefault();

        // 버튼의 on클래스 유무체크후 sub show, hide
        if (el.classList.contains('on')) {
            // 참(on이 있을때)
            // on클래스 제거
            el.classList.remove('on');
            // 자신의 서브박스가 보일때 숨기기
            el.nextElementSibling.style.display = 'none';
        } else {
            // 거짓(on이 없을때)
            // 다른요소에 on있는 경우 전체on을제거
            Language.forEach(function(e) {
                e.classList.remove('on');
            });
            // 다른서브박스가 보이는경우 전체서브박스를 hide
            language_setting.forEach(function(a) {
                a.style.display = 'none';
            });
            // 버튼 자기자신에게 on클래스 생성
            el.classList.add('on');
            // 버튼의 동생인 서브박스 보이기
            el.nextElementSibling.style.display = 'block';
        }
    });
});

language_select.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        if (element.classList.contains('on')) {
            element.classList.remove('on');
        } else {
            language_select.forEach(function(otherElement) {
                otherElement.classList.remove('on');
            });
            element.classList.add('on');
        }
    });
});

const SiteBtn = document.querySelectorAll('.siteBtn');
const SiteLinkList = document.querySelectorAll('.site-Link-list');

SiteBtn.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        if (element.classList.contains('on')) {
            element.classList.remove('on');
            element.nextElementSibling.style.display = 'none';
        } else {
            SiteBtn.forEach(function(otherElement) {
                otherElement.classList.remove('on');
            });
            element.classList.add('on');
            element.nextElementSibling.style.display = 'block';
        }
    });
});


swiperMain.on('slideChangeTransitionEnd', function () {
    const activeIndex = swiperMain.realIndex;

    titleLinks.forEach(btn => {
        btn.classList.remove('active');
    });

    titleLinks[activeIndex].classList.add('active');
});


const gnbItems = document.querySelectorAll('.gnb > li');
const subMenuBox = document.querySelector('.sub-menu-box');

gnbItems.forEach(li => {
    const sub = li.querySelector('.sub-menu');

    li.addEventListener('mouseenter', () => {
        subMenuBox.classList.add('open');
        if (sub) sub.style.display = 'block';
    });

    li.addEventListener('mouseleave', () => {
        if (sub) sub.style.display = 'none';
        subMenuBox.classList.remove('open');
    });
});


