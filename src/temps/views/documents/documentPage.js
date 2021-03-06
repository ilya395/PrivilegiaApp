export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <div class="documents-wr inner-block">
        <div class="container">
            <p>Полный перечень документов в соответствии с законодательством* размещен в сети «Интернет» на сайте <a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/">наш.дом.рф</a></p>
            <p><em>
                *В соответствии с п. 1 ст. 3.1. Федерального закона от 30.12.2004 N 214-ФЗ 
                «Об участии в долевом строительстве многоквартирных домов и иных объектов недвижимостии
                о внесении изменений в некоторые законодательные акты Российской Федерации», Застройщик,
                привлекающий денежные средства участников долевого строительства, обеспечивает свободный доступ
                к информации (раскрывает информацию), предусмотренной настоящим Федеральным законом, путем размещения
                ее в единой информационной системе жилищного строительства. Информация считается раскрытой после ее
                размещения в указанной системе.<br>
                Постановлением Правительства РФ от 25.09.2018 N 1133 в качестве адреса сайта единой информационной
                системы жилищного строительства в информационно-телекоммуникационной сети «Интернет» установлен адрес сайта
                https://наш.дом.рф
            </em></p>
            <p><a href="https://наш.дом.рф/сервисы/каталог-новостроек/объект/22902" class="button" target="_blank" style="display: block; text-decoration: none"> перейти к документации</a></p>
        </div>
    </div>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('#document-page')
    wrap.classList.add('visible')
}