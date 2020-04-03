export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <!-- m_footer -->
    <footer>
        <div class="container_l">
            <div class="logo-footer"><a href="#"><img src="temps/img/logo-footer.png"></a></div>
            <div class="socialnets mobile">
                <div class="item"><a href="#" target="_blank"><img src="temps/img/vk.png"></a></div>
                <div class="item"><a href="#" target="_blank"><img src="temps/img/fb.png"></a></div>
                <div class="item"><a href="#" target="_blank"><img src="temps/img/inst.png"></a></div>
            </div>
            <a href="#" class="pd mobile">проектная декларация</a>
            <div class="text-footer">
                <a href="#" class="pd">проектная декларация</a>
                <p class="p-footer">2018 © Жилой комплекс «Привилегия»</p>
                <p class="p-footer">Сайт носит информационный характер и не является публичной офертой согласно положениям Статьи 437 Гражданского кодекса Российской Федерации.</p>
                <p class="p-footer"><strong>Автор проекта — Тухватуллина Ильсияр Мисхатовна</strong></p>
            </div>
            <div class="smu-logo"><a href="https://smu88.group/" target="_blank"><img src="temps/img/smu.png"></a></div>
            <div class="forth">
                <div class="socialnets">
                    <div class="item"><a href="#" target="_blank"><img src="temps/img/vk.png"></a></div>
                    <div class="item"><a href="#" target="_blank"><img src="temps/img/fb.png"></a></div>
                    <div class="item"><a href="#" target="_blank"><img src="temps/img/inst.png"></a></div>
                </div>
                <div class="sold-logo"><a href="http://soldco.ru/" target="_blank"><img src="temps/img/soldco_logo.png"></a></div>
            </div>
        </div>
    </footer>
    <!-- /m_footer -->
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('footer')
    wrap.classList.add('visible')
}