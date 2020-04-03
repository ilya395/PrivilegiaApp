export const tpl = {
    content: footerTemplate,
    func: handler
}

function footerTemplate() {
    const html = `
    <div id="contacts"></div>
    <div class="legend mobile inner-block">
        <div class="container">
            <h1>Контакты</h1>
            <p class="med">+7 (843) 207-23-58</p>
            <p class="af_contacts-btn link callback-open">Заказать звонок</p>
            <p>
                <strong>Место строительства:</strong>
                г.&nbsp;Казань,
                <br>
                ул. Братьев Касимовых, 40В
            </p>
            <p class="of_bottom_8"><strong>Офис продаж:</strong></p>
            <p>ул. Братьев Касимовых, 40В</p>
            <p>
                пн-пт 9:00-20:00
                <br>
                сб-вс 10:00-17:00
                <br>
                *Уточнить график работы и более подробную информацию о работе отделов продаж можно по телефону +7 (843) 207-23-58.
            </p>
            <p>По запросу время работы <br>продлевается на час</p>
        </div>
    </div>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.legend.mobile')
    wrap.classList.add('visible')
}
