export const tpl = {
    content: footerTemplate,
    func: handler
}

function footerTemplate() {
    const html = `
    <section class="main-flats inner-block">
        <div class="container">
            <div class="main-flats-flex">
                <div class="flat" id="flat1">
                    <h4 class="text-center">Однокомнатная<br><strong>от 30,38 м<sup>2</sup></strong></h4>
                    <div class="images">
                        <img src="temps/img/1_komn.png" class="plan">
                    </div>
                </div>
                <div class="flat" id="flat2">
                    <h4 class="text-center">Двухкомнатная<br><strong>от 50,84 м<sup>2</sup></strong></h4>
                    <div class="images">
                        <img src="temps/img/2_komn.png" class="plan">
                    </div>
                </div>
                <div class="flat" id="flat3">
                    <h4 class="text-center">Трёхкомнатная<br><strong>от 60,30 м<sup>2</sup></strong></h4>
                    <div class="images">
                        <img src="temps/img/3_komn.png" class="plan">
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.main-flats')
    wrap.classList.add('visible')
}
