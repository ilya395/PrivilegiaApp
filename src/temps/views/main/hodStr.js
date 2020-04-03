export const tpl = {
    content: footerTemplate,
    func: handler
}

function footerTemplate() {
    const html = `
    <section class="hod-str inner-block">
        <div class="container">
            <h1>Ход строительства</h1>
            <div class="scale-wr">
                <div class="top">
                    <div class="title">Начало строительства<br>4 квартал 2018</div>
                    <div class="title">Окончание строительства<br>4 квартал 2021</div>
                </div>
                <div class="scale-wh">
                    <div class="scale-act"><span>40%</span></div>
                </div>
            </div>
            <div class="hod-s-sl-wrapper">
                <div class="hod-s-sl-over desktop">
                    <ul class="hod-s-sl">
                        <li>
                            <img data-img-src="[[+image_absolute]]" src="">
                            <a href="#" class="mask">
                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>
                                <p>[[+pagetitle]]</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="hod-s-sl-over mobile">
                    <ul class="hod-s-sl">
                        <li>
                            <img data-img-src="[[+image_absolute]]" src="">
                            <a href="#" class="mask">
                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>
                                <p>[[+pagetitle]]</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="arrow left desktop"><img src="temps/img/arrow-l.png"></div>
                <div class="arrow right desktop"><img src="temps/img/arrow-r.png"></div>
            </div>
        </div>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.hod-str')
    wrap.classList.add('visible')
}
