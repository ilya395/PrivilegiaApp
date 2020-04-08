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
                <div data-title="about" class="complex-tab-btn active">О комплексе<div class="underline"></div></div>
                <div data-title="akcii" class="complex-tab-btn">Акции<div class="underline"></div></div>
                <div data-title="events" class="complex-tab-btn">События<div class="underline"></div></div>
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
    // ajax
    render()
    //
    /*табы на главной*/
    $('.complex-adv .complex-tab-btn').click(function() {
        var ind = $(this).index();
        if(!($(this).hasClass('active'))) {
            $('.complex-adv .complex-tab-btn').removeClass('active');
            $('.complex-adv .complex-tab-btn').eq(ind).addClass('active');
            $('.complex-adv .cc_item').removeClass('active');
            $('.complex-adv .cc_item').eq(ind).addClass('active');
        }
        render()
    });
    
    $('.complex-adv .all-news-btn').click(function() {
        $('.complex-adv .complex-adv-extra').css('display', 'flex');
        $('.complex-adv .all-news-btn').css('display', 'none');
    });
    
    
    $('.view .view-button').click(function() {
        $('.view .mask').fadeOut();
    });

    //
    let localDataAbout = []
    let localDataAkcii = []
    let localDataEvents = []

    let localData = []
    //
    function render() {
        let cc_about = document.getElementById('cc_about')
        let cc_akcii = document.getElementById('cc_akcii')
        let cc_news = document.getElementById('cc_news')
        let parentBlock = cc_about

        let flag = 'about';
        let manageBtn = document.querySelector('.complex-tab-btn.active')
        flag = manageBtn.dataset.title

        let url = 'https://jsonplaceholder.typicode.com/posts/'

        // let localData = []

        switch (flag) {
            case 'akcii':
                url = 'https://jsonplaceholder.typicode.com/comments/';
                parentBlock = cc_akcii;
                localData = localDataAkcii;
                break;
            case 'events':
                url = 'https://jsonplaceholder.typicode.com/todos/';
                parentBlock = cc_news;
                localData = localDataEvents;
                break;
            default: // about
                url = 'https://jsonplaceholder.typicode.com/posts/';
                parentBlock = cc_about;
                localData = localDataAbout;
        }
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                switch (flag) {
                    case 'akcii':
                        localData = localDataAkcii = json;
                        break;
                    case 'events':
                        localData = localDataEvents = json;
                        break;
                    default: // about
                        localData = localDataAbout = json;
                }
                draw(localData, parentBlock, 5)
            })
    }
    function draw(object, block, param) {
        let lengthOfObject = param || 5
        let array = []
        for (let i of object) {
            array.push(i)
        }
        // array.sort(compareNumeric)
        function block_1(obj) {
            let html = `
            <div class="complex-adv-top">
                <div id="${obj.id}" class="complex-item complex-item-l cm-open  af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                    <div class="image"><img src=""></div>
                    <div class="bottom">
                        <div class="label"></div>
                        <h2>${obj.title}</h2>
                        <p>[[+description]]</p>
                    </div>
                </div>        
            `
            return html
        } 
        function block_1_last(obj) {
            let html = `
            <div class="complex-adv-top">
                <div id="${obj.id}" class="complex-item complex-item-l cm-open  af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                    <div class="image"><img src=""></div>
                    <div class="bottom">
                        <div class="label"></div>
                        <h2>${obj.title}</h2>
                        <p>description</p>
                    </div>
                </div> 
            </div>
            `
            return html
        }
        function block_2(obj) {
            let html = `
            <div>
                <div id="${obj.id}" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                    <div class="image"><img src=""></div>
                    <div class="bottom">
                        <div class="label"></div>
                        <h3>${obj.title}</h3>
                    </div>
                </div>        
            `
            return html
        } 
        function block_2_last(obj) {
            let html = `
                <div>
                    <div id="${obj.id}" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                        <div class="image"><img src=""></div>
                        <div class="bottom">
                            <div class="label"></div>
                            <h3>${obj.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
            `
            return html
        } 
        function block_3(obj) {
            let html = `
                        <div id="${obj.id}" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                        <div class="image"><img src=""></div>
                        <div class="bottom">
                            <div class="label"></div>
                            <h3>${obj.title}</h3>
                        </div>
                    </div>
                </div>
            </div>        
            `
            return html
        } 
        function block_4(obj) {
            let html = `
            <div class="complex-adv-bottom">
                <div id="${obj.id}" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                    <div class="image"><img src=""></div>
                    <div class="bottom">
                        <div class="label"></div>
                        <h3>${obj.title}</h3>
                    </div>
                </div>        
            `
            return html
        } 
        function block_4_last(obj){
            let html = `
            <div class="complex-adv-bottom">
                <div id="${obj.id}" class="complex-item cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                    <div class="image"><img src=""></div>
                    <div class="bottom">
                        <div class="label"></div>
                        <h3>${obj.title}</h3>
                    </div>
                </div>
            </div>
            `
            return html
        }
        function block_5(obj) {
            let html = `
                <div id="${obj.id}" class="complex-item complex-item-m cm-open af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                    <div class="image"><img src=""></div>
                    <div class="bottom">
                        <div class="label"></div>
                        <h3>${obj.title}</h3>
                    </div>
                </div>
            </div>
            `
            return html
        } 
        let str = ``
        for (let j = 0; j < lengthOfObject; j++) {
            if (j + 1 == 1 || (j + 1) % 5 == 1 ) {
                if (j == lengthOfObject - 1) {
                    str += block_1_last(array[j])
                } else {
                    str += block_1(array[j])
                }
            } else if (j + 1 == 2 || (j + 1) % 5 == 2) {
                if (j == lengthOfObject - 1) {
                    str += block_2_last(array[j])
                } else {
                    str += block_2(array[j])
                }
            } else if (j + 1 == 3 || (j + 1) % 5 == 3) {
                str += block_3(array[j])
            } else if (j + 1 == 4 || (j + 1) % 5 == 4) {
                if (j == lengthOfObject - 1) {
                    str += block_4_last(array[j])
                } else {
                    str += block_4(array[j])
                }
            } else if (j + 1 == 5 || (j + 1) % 5 == 0) {
                str += block_5(array[j])
            } else {
                console.log('I dont know, what to do with it: ', j)
            }
        }
        block.innerHTML = str
        //
        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }
        //
        let wrap = document.querySelector('.cc_item.active')
        let items = wrap.querySelectorAll('.complex-item')
        function modalHendler() {
            console.log('тоткрыть модалку!')
            let clickedElem = this
            console.log(this)
            console.log(localData)
            // вызвать модалку
            if (!document.querySelector('.modal.complex-modal')) {
                const parent = document.querySelector('.overlay')
                import('../otherModules/complexModal')
                    .then((obj) => {
                        parent.insertAdjacentHTML('afterbegin', obj.tpl.content())
                        return obj
                    })
                    .then((obj) => {
                        obj.tpl.func() // включим внурениий функционал модуля
                    })
                    .then(() => {
                        insertData(clickedElem)
                    })
            } else {   
                $('.overlay .complex-modal').css('display', 'block');
                $('.overlay').fadeIn();

                insertData(clickedElem);           
            }
            // воткнуть данные
            function insertData(el) {
                let number = el.getAttribute('id')
                let modal = document.getElementById('complex-modal')
                let title = modal.querySelector('.bottom-text h2')
                let result = localData.find((item) => {
                    item.id == number
                    return item
                })
                title.innerText = result.title
            }
        }
        items.forEach((item) => {
            item.addEventListener('click', modalHendler)
        })
    }
}
