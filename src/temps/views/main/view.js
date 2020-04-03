export const tpl = {
    content: footerTemplate,
    func: handler
}

function footerTemplate() {
    const html = `
    <section class="view inner-block">
        <div class="mask">
            <div class="view-button">
                <span>Вид в 360°</span>
                <div class="view-button-shadow"></div>
            </div>
        </div>
        <iframe 
            width="100%" 
            height="640" 
            style="width: 100%; border: none; max-width: 100%;" 
            frameborder="0" 
            allow="vr,gyroscope,accelerometer,fullscreen" 
            scrolling="no" 
            allowfullscreen="true" 
            src="https://kuula.co/share/79qpv?fs=1&vr=0&sd=1&thumbs=1&chromeless=0&logo=0">
        </iframe>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.view')
    wrap.classList.add('visible')
}
