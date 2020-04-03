export const tpl = {
    content: footerTemplate,
    func: handler
}

function footerTemplate() {
    const html = `
    <section class="entrance inner-block">
        <div class="container">
            <h1>Комфортный подъезд</h1>
        </div>
        <div class="beauty-sl-wr">
            <div class="beauty-sl-over">
                <ul class="beauty-sl list-sl">
                    <li><img src="temps/img/entrance/PRGY_001.png"></li>
                    <li><img src="temps/img/entrance/PRGY_002.png"></li>
                    <li><img src="temps/img/entrance/PRGY_003.png"></li>
                    <li><img src="temps/img/entrance/PRGY_004.png"></li>
                    <li><img src="temps/img/entrance/PRGY_005.png"></li>
                </ul>
            </div>
            <div class="arrow left"><img src="temps/img/arrow-l.png"></div>
            <div class="arrow right"><img src="temps/img/arrow-r.png"></div>
            <ul class="controls"></ul>
        </div>
        <div class="container">
            <div class="flex-wr">
                <div class="first">
                    <p>Бесступенчатый вход в подъезд, удобные пандусы <br class="desktop">и широкие тамбуры — комфорт в «Привилегии» <br class="desktop">начинается с самого порога.</p>
                    <p><strong>Помимо этого, в каждом подъезде будут:</strong></p>
                    <div class="flex-entr-items">
                        <div class="item">
                            <div class="icon"><img src="temps/img/entrance/priv-icon4.png"></div>
                            <span>Бесшумные лифты европейских марок</span>
                        </div>
                        <div class="item">
                            <div class="icon"><img src="temps/img/entrance/priv-icon5.png"></div>
                            <span>Домофон и видеонаблюдение</span>
                        </div>
                        <div class="item">
                            <div class="icon"><img src="temps/img/entrance/priv-icon2.png"></div>
                            <span>Велопарковки возле каждого подъезда</span>
                        </div>
                        <div class="item">
                            <div class="icon"><img src="temps/img/entrance/priv-icon3.png"></div>
                            <span>Стеклянная входная группа</span>
                        </div>
                        <div class="item">
                            <div class="icon"><img src="temps/img/entrance/priv-icon1.png"></div>
                            <span>Дизайнерский <br class="desktop">интерьер</span>
                        </div>
                        <div class="item">
                            <div class="icon"><img src="temps/img/entrance/priv-icon6.png"></div>
                            <span>Просторные  <br class="desktop">колясочные</span>
                        </div>
                    </div>
                </div>
                
            
                <div class="tour-3d">
                    <a href="https://kuula.co/share/collection/7ll7P?fs=1&vr=0&thumbs=1&chromeless=0&logo=0" target="_blank">
                        <div class="icon"><img src="temps/img/entrance/priv-icon-3d.png"></div>
                        <div class="inf">Пройдитесь по подъезду в виртуальном пространстве</div>
                        <div class="tour-3d-btn-wr">
                            <div class="tour-3d-btn">3D-тур</div>
                            <div class="shadow"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.entrance')
    wrap.classList.add('visible')
}
