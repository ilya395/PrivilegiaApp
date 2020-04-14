const path  = require('path')

import { complexModal } from '../../models/Modal'

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

        let url = path.resolve(__dirname, './data_about-complex.json')
        // 'https://jsonplaceholder.typicode.com/posts/'

        // let localData = []

        switch (flag) {
            case 'akcii':
                url = path.resolve(__dirname, './data_akcii.json');
                parentBlock = cc_akcii;
                localData = localDataAkcii;
                break;
            case 'events':
                url = path.resolve(__dirname, './data_events.json');
                parentBlock = cc_news;
                localData = localDataEvents;
                break;
            default: // about
                url = path.resolve(__dirname, './data_about-complex.json');
                parentBlock = cc_about;
                localData = localDataAbout;
        }
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                let endOfArray = 5
                switch (flag) {
                    case 'akcii':
                        localData = localDataAkcii = json;
                        endOfArray = 5
                        break;
                    case 'events':
                        localData = localDataEvents = json;
                        endOfArray = 10
                        break;
                    default: // about
                        localData = localDataAbout = json;
                        endOfArray = 5
                }
                draw(localData, parentBlock, endOfArray)
            })
    }
    function draw(object, block, param) {
        let weNeedMore = true
        let array = []
        for (let i of object) {
            array.push(i)
        }
        let lengthOfObject = param || 5
        if (array.length < lengthOfObject) {
            lengthOfObject = array.length
            weNeedMore = false
        }
        array.sort(compareNumeric)
        function block_1(obj) {
            let html = `
            <div class="complex-adv-top">
                <div id="${obj.id}" class="complex-item complex-item-l cm-open  af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                    <div class="image"><img src="${obj.preview}"></div>
                    <div class="bottom">
                        <div class="label"></div>
                        <h2>${obj.title}</h2>
                        <p>${obj.description}</p>
                    </div>
                </div>        
            `
            return html
        } 
        function block_1_last(obj) {
            let html = `
            <div class="complex-adv-top">
                <div id="${obj.id}" class="complex-item complex-item-l cm-open  af_start-btn" data-action="getResources" data-tpl="gr_complex-modal" data-resources="[[+id]]">
                    <div class="image"><img src="${obj.preview}"></div>
                    <div class="bottom">
                        <div class="label"></div>
                        <h2>${obj.title}</h2>
                        <p>${obj.description}</p>
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
                    <div class="image"><img src="${obj.preview}"></div>
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
                        <div class="image"><img src="${obj.preview}"></div>
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
                        <div class="image"><img src="${obj.preview}"></div>
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
                    <div class="image"><img src="${obj.preview}"></div>
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
                    <div class="image"><img src="${obj.preview}"></div>
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
                    <div class="image"><img src="${obj.preview}"></div>
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
        if (weNeedMore == true) {
            str += `
            <div class="button all-news-btn">загрузить еще</div>
            `
        }
        block.innerHTML = str
        //
        function compareNumeric(a, b) {
            if (a['time-stamp'] > b['time-stamp']) return 1;
            if (a['time-stamp'] == b['time-stamp']) return 0;
            if (a['time-stamp'] < b['time-stamp']) return -1;
        }
        //
        let wrap = document.querySelector('.cc_item.active') // .querySelectorAll('.complex-item')
        let items = wrap.querySelectorAll('.complex-item')
        //
        if (weNeedMore == true) {
            function drawMore() {
                block.querySelector('.button.all-news-btn').style.display = 'none'
                let str = ``
                let notYetHave = []
                for (let j = lengthOfObject; j < array.length; j++) {
                    notYetHave.push(array[j])
                    if (j + 1 == 1 || (j + 1) % 5 == 1 ) {
                        if (j == array.length - 1) {
                            str += block_1_last(array[j])
                        } else {
                            str += block_1(array[j])
                        }
                    } else if (j + 1 == 2 || (j + 1) % 5 == 2) {
                        if (j == array.length - 1) {
                            str += block_2_last(array[j])
                        } else {
                            str += block_2(array[j])
                        }
                    } else if (j + 1 == 3 || (j + 1) % 5 == 3) {
                        str += block_3(array[j])
                    } else if (j + 1 == 4 || (j + 1) % 5 == 4) {
                        if (j == array.length - 1) {
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
                block.insertAdjacentHTML('beforeend', str)
                //
                block.querySelector('.button.all-news-btn').removeEventListener('click', drawMore)
                //
                items = wrap.querySelectorAll('.complex-item')
            }
            block.querySelector('.button.all-news-btn').addEventListener('click', drawMore)
        }
        //
        function modalHendler() {
            console.log('тоткрыть модалку!')
            // let clickedElem = this
            // let items = document.querySelectorAll('.complex-item')
            let clickedElem = ''
            for (let k of items) {
                if (k.contains(event.target)) {
                    clickedElem = k

                    let modalka = complexModal(clickedElem, localData)
                    modalka.open()
                }
            }

            // // вызвать модалку
            // if (!document.querySelector('.modal.complex-modal')) {
            //     const parent = document.querySelector('.overlay')
            //     import('../otherModules/complexModal')
            //         .then((obj) => {
            //             parent.insertAdjacentHTML('afterbegin', obj.tpl.content())
            //             return obj
            //         })
            //         .then((obj) => {
            //             obj.tpl.func() // включим внурениий функционал модуля
            //         })
            //         .then(() => {
            //             insertData(clickedElem)
            //         })
            // } else {   
            //     $('.overlay .complex-modal').css('display', 'block');
            //     $('.overlay').fadeIn();

            //     insertData(clickedElem);           
            // }
            // // воткнуть данные
            // function insertData(el) {
            //     let modal = document.getElementById('complex-modal')
            //     let content = modal.querySelector('.complex-modal__content')
            //     content.innerHTML = ''

            //     let number = +el.getAttribute('id')
            //     let result = localData.find((item) => {
            //         if (item.id == number) {
            //             return item
            //         }
            //     })
            //     console.log(result)

            //     let imgWrap = document.createElement('div')
            //     imgWrap.classList.add('top-image')
            //     content.append(imgWrap)
            //     imgWrap.innerHTML = `<img src="${result.preview}">`

            //     let contentWrap = document.createElement('div')
            //     contentWrap.classList.add('bottom-text')
            //     content.append(contentWrap)
            //     contentWrap.innerHTML = `
            //     <div class="label"></div>
            //     <h2>${result.title}</h2>
            //     ${result.content}
            //     `
            // }
        }
        // items.forEach((item) => {
        //     item.addEventListener('click', modalHendler)
        // })
        document.querySelector('.complex-content').addEventListener('click', modalHendler)
    }
}
