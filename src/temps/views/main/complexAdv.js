export const tpl = {
    content: footerTemplate,
    func: handler
}

function footerTemplate() {
    const html = `
    <div id="complex"></div>
    <section class="complex-adv inner-block">
        <div class="container">
            <div class="complex-tabs">
                <div class="complex-tab-btn active">О комплексе<div class="underline"></div></div>
                <div class="complex-tab-btn">Акции<div class="underline"></div></div>
                <div class="complex-tab-btn">События<div class="underline"></div></div>
            </div>
            <div class="complex-content">
                <div class="cc_item active" id="cc_about">
                    <div class="complex-adv-top">
                        <div id="om[[+id]]" class="complex-item complex-item-l cm-open  af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h2>[[+pagetitle]]</h2>
                                <p>[[+description]]</p>
                            </div>
                        </div>
                        <div>
                            <div id="om[[+id]]" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                                <div class="image"><img src=""></div>
                                <div class="bottom">
                                    <div class="label"></div>
                                    <h3>[[+pagetitle]]</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="complex-adv-bottom">
                        <div id="om[[+id]]" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h3>[[+pagetitle]]</h3>
                            </div>
                        </div>
                        <div id="om[[+id]]" class="complex-item complex-item-m cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h3>[[+pagetitle]]</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cc_item" id="cc_akcii">
                    <div class="complex-adv-top">
                        <div id="om[[+id]]" class="complex-item complex-item-l cm-open  af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h2>[[+pagetitle]]</h2>
                                <p>[[+description]]</p>
                            </div>
                        </div>
                        <div>
                            <div id="om[[+id]]" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                                <div class="image"><img src=""></div>
                                <div class="bottom">
                                    <div class="label"></div>
                                    <h3>[[+pagetitle]]</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="complex-adv-bottom">
                        <div id="om[[+id]]" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h3>[[+pagetitle]]</h3>
                            </div>
                        </div>
                        <div id="om[[+id]]" class="complex-item complex-item-m cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h3>[[+pagetitle]]</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cc_item" id="cc_news">
                    <div class="complex-adv-top">
                        <div id="om[[+id]]" class="complex-item complex-item-l cm-open  af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h2>[[+pagetitle]]</h2>
                                <p>[[+description]]</p>
                            </div>
                        </div>
                        <div>
                            <div id="om[[+id]]" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                                <div class="image"><img src=""></div>
                                <div class="bottom">
                                    <div class="label"></div>
                                    <h3>[[+pagetitle]]</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="complex-adv-bottom">
                        <div id="om[[+id]]" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h3>[[+pagetitle]]</h3>
                            </div>
                        </div>
                        <div id="om[[+id]]" class="complex-item complex-item-m cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h3>[[+pagetitle]]</h3>
                            </div>
                        </div>
                    </div>
                    <div class="complex-adv-extra">
                        <div id="om[[+id]]" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                            <div class="image"><img data-img-src="" src=""></div>
                            <div class="bottom">
                                <div class="label"></div>
                                <h3>[[+pagetitle]]</h3>
                            </div>
                        </div>
                    </div>
                    <div class="button all-news-btn">все события</div>
                </div>
            </div>
        </div>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.complex-adv')
    wrap.classList.add('visible')
}
