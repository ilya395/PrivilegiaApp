export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <section class="banner inner-block" id="specBlock">
        <div class="swiper-container container_l" id="main-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="[[~249]]">
                        <img src="temps/img/privilege_for_everyone/PRVLG_1200_640.jpg" class="banner-image">
                        <img src="temps/img/privilege_for_everyone/PRVLG_375_417.jpg" class="banner-image-mob mobile">
                        <div class="container_l">
                            <div class="text mobile">
                                <h1>«Привилегия» для каждого!</h1>
                                <p>Квартиры бизнес-класса от 3,4 млн рублей</p>
                            </div>
                            <h1 class="desktop" style="position: absolute; color: #fff; top: 143px; left: 68px">Квартиры бизнес-класса<br>от 3,4 млн рублей</h1>
                        </div>
                    </a>
                </div>
                <div class="swiper-slide">
                    <div class="cm-open" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                        <img src="temps/pics/2020/2/6/1200-640.png" class="banner-image">
                        <img src="temps/pics/2020/2/6/375-417.png" class="banner-image-mob mobile">
                        <div class="container_l mobile">
                            <div class="text">
                                <h1>[[+pagetitle]]</h1>
                                <p>[[+longtitle]]</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="temps/img/banner.png" class="banner-image">
                    <img src="temps/img/banner-mob.png" class="banner-image-mob mobile">
                    <div class="container_l">
                        <div class="text">
                            <h1>Жилой комплекс европейского уровня с&nbsp;квартирами бизнес-класса</h1>
                            <p>Создавая «Привилегию», мы постарались объединить в&nbsp;одном проекте преимущества городской среды и&nbsp;европейского комфорта, что&nbsp;выгодно выделяет комплекс на&nbsp;фоне окружающих домов. </p>
                            <h1>от 3 402 509 руб.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="arrows">
            <div class="arrow left"><img src="temps/img/arrow-l.png"></div>
            <div class="arrow right"><img src="temps/img/arrow-r.png"></div>
        </div>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.banner')
    wrap.classList.add('visible')
    //
    window.addEventListener('load', function(){
        if($('#specBlock .swiper-slide').length <= 1 ) {
            $('#specBlock .arrows').css('display', 'none');
        } else {
            var swiper = new Swiper('#main-swiper', {
                speed: 700,
                grabCursor: true,
                centeredSlides: true,
                loop: true,
                slidesPerView: 1,
                autoplay: {
                    delay: 3000,
                },
                navigation: {
                    nextEl: '#specBlock .right',
                    prevEl: '#specBlock .left',
                }
            });
        }
    })
}