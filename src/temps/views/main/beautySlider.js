export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <section class="beauty-slider inner-block">
        <div class="container">
            <h1>Посмотрите, каким он получится</h1>
        </div>
        <div class="beauty-sl-wr">
            <div class="beauty-sl-over">
                <ul class="beauty-sl list-sl">
                    <li>
                        <picture>
                            <source srcset="temps/img/for_mobs/sl-1.jpg 1x, temps/img/for_mobs/sl-1.jpg 2x" media="(max-width:500px)" type="image/jpg">
                            <img src="temps/img/sl-1.png" srcset="temps/img/sl-1.png 2x" alt="Внешний вид на ЖК Привилегия">
                        </picture>
                    </li>
                    <li>
                        <picture>
                            <source srcset="temps/img/for_mobs/sl-2.jpg 1x, temps/img/for_mobs/sl-2.jpg 2x" media="(max-width:500px)" type="image/jpg">
                            <img src="temps/img/sl-2.png" srcset="temps/img/sl-2.png 2x" alt="Внешний вид на ЖК Привилегия">
                        </picture>
                    </li>
                    <li>
                        <picture>
                            <source srcset="temps/img/for_mobs/sl-3.jpg 1x, temps/img/for_mobs/sl-3.jpg 2x" media="(max-width:500px)" type="image/jpg">
                            <img src="temps/img/sl-3.png" srcset="temps/img/sl-3.png 2x" alt="Внешний вид на ЖК Привилегия">
                        </picture>
                    </li>
                    <li>
                        <picture>
                            <source srcset="temps/img/for_mobs/sl-4.jpg 1x, temps/img/for_mobs/sl-4.jpg 2x" media="(max-width:500px)" type="image/jpg">
                            <img src="temps/img/sl-4.png" srcset="temps/img/sl-4.png 2x" alt="Внешний вид на ЖК Привилегия">
                        </picture>
                    </li>
                </ul>
            </div>
            <div class="arrow left"><img src="temps/img/arrow-l.png"></div>
            <div class="arrow right"><img src="temps/img/arrow-r.png"></div>
            <ul class="controls"></ul>
        </div>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.beauty-slider')
    wrap.classList.add('visible')
}