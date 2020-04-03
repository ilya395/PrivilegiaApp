export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <div class="container inner-block">
        <img class="info-image" src="temps/pics/2018/09/26/smu.png">
        <h6>Застройщик</h6>
        <p>Застройщиком «Привилегии» является ООО «Жилой комплекс «Горкинский лес», входящее в группу компаний «Строительно-монтажное управление 88».</p>
        <p dir="ltr"><span>Группа компаний «СМУ-88» — новый застройщик на рынке казанской недвижимости. </span></p>
        <p dir="ltr"><span>Всего за 2 года запущено несколько проектов с уникальными для Казани концепциями. Так, дом-сенсация Skyline стал первым в городе жилым комплексом с парком на крыше, Richmond — дом-курорт клубного типа на берегу Волги, а «Норвежский» — жилой комплекс, созданный для Севера и построенный в Казани.</span></p>
        <p dir="ltr"><span>Отличительная черта «СМУ-88» — строительство с соблюдением проектных сроков. Отличный пример — жилой комплекс IQ DOM, который был сдан на полгода раньше планируемой даты. </span></p>
        <p dir="ltr"><span>Несмотря на то, что все проекты разные по своей концепции и аудитории, всех их объединяют высокое качество, активные темпы строительства и оригинальность идеи. Узнайте подробнее о жилых комплексах от застройщика «СМУ-88» в Казани:</span></p>
        <p dir="ltr"><em><strong>IQ DOM </strong></em><span>— жилой комплекс будущего: закрытый двор на стилобате, скамейки, заряжающее телефон, система «теплый пол» в подъезде — и это лишь малая часть современных технологий, которыми оснащен дом. </span></p>
        <p dir="ltr"><strong>Дом сдан</strong></p>
        <p dir="ltr">Сайт <a href="https://iqdom.info/" target="_blank">iqdom.info</a> Телефон +7 (843) 297-22-25</p>
        <p dir="ltr"><strong>«Пять звёзд» </strong><span>— премиальный жилой комплекс отельного типа: консьерж-сервис и прачечная, панорамный вид на Казанский Кремль, роскошные пентхаусы на верхних этажах дома.</span></p>
        <p dir="ltr"><strong>Дом сдан</strong></p>
        <p dir="ltr">Сайт <a href="https://xn--5-7sbhfdfmc3bt.xn--p1ai/" target="_blank">дома5звезд.рф</a> Телефон +7 (843) 215-15-55</p>
        <p dir="ltr"><strong>«Норвежский»</strong><span> — традиции скандинавского строительства и актуальные архитектурные решения: эко-двор, крытый паркинг, подъезд с теплым полом, удобные планировки и самое лучшее — живописное озеро рядом с домом.</span></p>
        <p dir="ltr">Сайт <a href="https://norvegiandom.ru/" target="_blank">norvegiandom.ru</a> Телефон +7 (843) 225-31-31</p>
        <p dir="ltr"><strong>Skyline </strong><span>— дом-сенсация с настоящим парком на крыше. Уникальная зона отдыха на 24-м этаже станет вашим любимым местом для отдыха, а продуманные планировки с большими и просторными комнатами позволят воплотить в жизнь любые дизайнерские решения.</span></p>
        <p dir="ltr">Сайт <a href="https://domsensation.ru/" target="_blank">domsensation.ru</a> Телефон +7 (843) 225-67-67</p>
        <p dir="ltr"><strong>Richmond</strong><span> — первый дом-курорт в Казани. Экологически чистый район, застройка по клубному типу и квартиры бизнес-класса с видом на акваторию Волги.</span></p>
        <p dir="ltr">Сайт <a href="https://richmonddom.ru/" target="_blank">richmonddom.ru</a> Телефон +7 (843) 218-00-19</p>
        <p><strong>«Малиновка Premium life»</strong> — идеальный вариант для тех, кто решил улучшить жилищные условия за приемлемые деньги: подъезд похож на холл современного отеля, целых 4 лифта OTIS, застройка дома по клубному типу и просторные квартиры комфорт-класса.</p>
        <p dir="ltr">Сайт <a href="https://xn--80aafolkdfhnl.xn--p1ai/" target="_blank">жкмалиновка.рф</a> Телефон +7 (843) 215-02-17</p>
        <p dir="ltr"><span><span><strong>Atlantis Deluxe</strong> — жилой комплекс, который приковывает взгляды: cовременный дизайн, лаконичные формы и полностью зеркальное остекление фасада. Благодаря удачному расположению комплекса вам доступны роскошные виды на Казанский кремль.</span></span></p>
        <p dir="ltr"><span>Сайт: <a href="https://domatlantis.ru/" target="_blank">domatlantis.ru </a>Телефон: 225-20-60</span></p>
    </div>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('#zastroy-page')
    wrap.classList.add('visible')
}