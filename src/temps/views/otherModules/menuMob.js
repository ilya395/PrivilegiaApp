export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <!-- -->
    <div class="menu-mob">
        <div class="inside">
            <div class="logo"><a route="/" href="/"><img src="temps/img/logo-mob.png"></a></div>
            <nav>
                <li><a route="/sposobyi-oplatyi" href="/sposobyi-oplatyi">Способы оплаты<div class="underline"></div></a></li>
                <li><a route="/zastrojshhik" href="/zastrojshhik">Застройщик<div class="underline"></div></a></li>
                <li><a route="/dokumentacziya" href="/dokumentacziya">Документация<div class="underline"></div></a></li>
            </nav>
            <div class="socialnets">
                <a href="https://vk.com/privilegiadom" target="_blank"><img src="temps/img/vk-mob.png"></a>
                <a href="https://fb.me/privilegiadom.ru" target="_blank"><img src="temps/img/fb-mob.png"></a>
                <a href="https://www.instagram.com/privilegiadom/" target="_blank"><img src="temps/img/inst-mob.png"></a>
            </div>
            <p>Почта: <a href="mailoto:press@norvegian.ru">press@privilegiadom.ru</a><br>
               Телефон: <a href="tel:+78432072469">+7 (843) 207-24-69</a>
            </p>
            <p class="light">Место строительства</p>
            <p>
                <strong>Место строительства:</strong>
                г.&nbsp;Казань, <br>
                ул. Братьев Касимовых, 40В
            </p>
            <p>
                пн-пт 9:00-20:00
                <br>
                сб-вс 10:00-17:00
                <br>
                *Уточнить график работы и более подробную информацию о работе отделов продаж можно по телефону +7 (843) 207-24-69.
            </p>
        </div>
        <div class="close-mob"><img src="temps/img/close-mob.png"></div>
    </div>
    <!-- -->
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.menu-mob')
    wrap.classList.add('visible')
    //
    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
    //
    $('.menu-mob .close-mob').click(function() {
        $('.menu-mob').animate({
            width: '0%'
        }, 400);
    });
    
    $('.menu-mob nav a').click(function() {
        $('.menu-mob').animate({
            width: '0%'
        }, 400);
    });
}