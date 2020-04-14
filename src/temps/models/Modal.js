// class Modal {
//     constructor(element, arrayData) {
//         this.element = element;
//         this.arrayData = arrayData;
//     }



//     openModal() {
//         if (!document.querySelector('.modal.complex-modal')) {
//             const parent = document.querySelector('.overlay')
//             import('../views/otherModules/complexModal')
//                 .then((obj) => {
//                     parent.insertAdjacentHTML('afterbegin', obj.tpl.content())
//                     return obj
//                 })
//                 .then((obj) => {
//                     obj.tpl.func() // включим внурениий функционал модуля
//                 })
//                 .then(() => {
//                     insertData(clickedElem)
//                 })
//         } else {
//             $('.overlay .complex-modal').css('display', 'block');
//             $('.overlay').fadeIn();
//             insertData(clickedElem)
//         }
//     }

//     closeModal() {
//         $('.overlay').fadeOut();
//         $('.overlay .modal').fadeOut();
//     }

//     setContent(html) {
//         console.log(html || 'kek')
//     }
// }

import { formFromAkcii } from './Form'

export let complexModal = function(element, arrayData) {

    let clickedElem = element
    let localData = arrayData

    // let variableContent

    function insertData(el) {
        let modal = document.getElementById('complex-modal')
        let content = modal.querySelector('.complex-modal__content')
        content.innerHTML = ''

        let number = +el.getAttribute('id')
        let result = localData.find((item) => {
            if (item.id == number) {
                return item
            }
        })
        // console.log(result)

        let imgWrap = document.createElement('div')
        imgWrap.classList.add('top-image')
        content.append(imgWrap)
        imgWrap.innerHTML = `<img src="${result.preview}">`

        let contentWrap = document.createElement('div')
        contentWrap.classList.add('bottom-text')
        content.append(contentWrap)
        contentWrap.innerHTML = `
        <div class="label"></div>
        <h2>${result.title}</h2>
        ${result.content}
        `
    }

    function linkThisForm() {
        if (document.getElementById('complex-modal')) {
            let modalBlock = document.getElementById('complex-modal')
            let form = modalBlock.querySelector('form')
            console.log(form)
            let simpleForm = formFromAkcii(form)
            simpleForm.listenToClick()
        } else {
            console.log('i dont see form')
        }
    }

    const modal = {
        open() {
            if (!document.querySelector('.modal.complex-modal')) {
                const parent = document.querySelector('.overlay')
                import('../views/otherModules/complexModal')
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
                    .then(() => {
                        linkThisForm()
                    })
            } else {
                $('.overlay .complex-modal').css('display', 'block');
                $('.overlay').fadeIn();
                insertData(clickedElem);
                linkThisForm();
            }
        },
        close() {
            $('.overlay').fadeOut();
            $('.overlay .modal').fadeOut();
        }
    }

    return modal
}

export let hodStrModal = function(object) {

    let clickObj = object

    let modalBlock = document.querySelector('.modal.complex-modal')

    function insertDataValue(obj) {

        let imgsTpl = function(param) {
            let html = `
            <a href="${param}" data-fancybox="gallery">
                <img src="${param}" >
            </a>                    
            `
            return html
        }

        // удалить мусор

        let imgWrap = document.querySelector('.modal.complex-modal .top-image')
        imgWrap.innerHTML = ''

        let modalGallery = document.createElement('div')
        modalGallery.classList.add('gallery-wr', 'gallery-imgs-row')
        imgWrap.append(modalGallery)

        let strWithImgs = ''
        for (let key in obj.gallery) {
            strWithImgs += imgsTpl(obj.gallery[key])
        }

        document.querySelector('.complex-modal .top-image').style.height = 'auto'

        modalGallery.innerHTML = strWithImgs

        ////////////////////////////////////////////////////////////////////////

        let textWrap = document.querySelector('.modal.complex-modal .bottom-text')

        textWrap.innerHTML = obj.content
        textWrap.insertAdjacentHTML('afterbegin', `<h3>${obj.pagetitle}</h3`)
        textWrap.insertAdjacentHTML('afterbegin', `<div class="label">${obj.date}</div>`)
    }

    const modal = {
        open() {
            if (!document.querySelector('.modal.complex-modal')) {
                const parent = document.querySelector('.overlay')
                import('../views/otherModules/complexModal')
                    .then((obj) => {
                        parent.insertAdjacentHTML('afterbegin', obj.tpl.content())
                        return obj
                    })
                    .then((obj) => {
                        obj.tpl.func() // включим внурениий функционал модуля
                    })
                    .then(() => {
                        insertDataValue(clickObj)
                    })
            } else {   
                $('.overlay .complex-modal').css('display', 'block');
                $('.overlay').fadeIn();

                insertDataValue(clickObj);  
            }
        },
        close() {
            $('.overlay').fadeOut();
            $('.overlay .modal').fadeOut();
        }
    }

    return modal
}