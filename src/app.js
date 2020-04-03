const path  = require('path')
//
import * as $ from 'jquery'
import { Router } from './temps/router/router'
// css
import './temps/css/mobile.css'
import './temps/css/index.css'
import './temps/swiper/swiper.min.css'
// js
// import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js'
// import './temps/js/service/jquery.inputmask.bundle.min.js'
// import './temps/js/service/phone-ru.min.js'

import './temps/swiper/swiper.js'

// import './temps/js/service/jquery.cookie.js'
// import './temps/js/service/test.cookie.js'
// import './temps/js/service/jquery.ba-throttle-debounce.min.js'
// import './temps/js/service/jquery.url.param.js'
// import './temps/js/index.js'
// sass
import './temps/sass/index.sass'


///////////////////////////////////////////////////////////////

//
// const container = document.getElementById('app')
const container = document.querySelector('.content')

let myRoute = new Router('myRouter', [
    {
        path: '/',
        name: 'main'
    },
    {
        path: '/sposobyi-oplatyi',
        name: 'payments'
    },
    {
        path: '/zastrojshhik',
        name: 'developer'
    },
    {
        path: '/dokumentacziya',
        name: 'documents'
    }
]);

const viewsList = [
    {
        name: 'main',
        id: 'app',
        modules: [
            {
                name: 'banner',
                active: true,
                visible: true,
                url: 'views/main/banner'
            },
            {
                name: 'mainFlats',
                active: true,
                visible: true,
                url: 'views/main/mainFlats'
            },
            {
                name: 'complexAdv',
                active: false,
                visible: false,
                url: 'views/main/complexAdv'
            },
            {
                name: 'hodStr',
                active: false,
                visible: false,
                url: 'views/main/hodStr'
            },
            {
                name: 'beautySlider',
                active: false,
                visible: false,
                url: 'views/main/beautySlider'
            },
            {
                name: 'entrance',
                active: false,
                visible: false,
                url: 'views/main/entrance'
            },
            {
                name: 'legendMobile',
                active: false,
                visible: false,
                url: 'views/main/legendMobile'
            },
            {
                name: 'map',
                active: false,
                visible: false,
                url: 'views/main/map'
            },
            {
                name: 'view',
                active: false,
                visible: false,
                url: 'views/main/view'
            }
        ]
    },
    {
        name: 'payments',
        id: 'pay-page',
        modules: [
            {
                name: 'payPage',
                active: true,
                visible: true,
                url: 'views/payments/payPage'
            }
        ]
    },
    {
        name: 'developer',
        id: 'zastroy-page',
        modules: [
            {
                name: 'zastroyPage',
                active: true,
                visible: true,
                url: 'views/developer/zastroyPage'
            }
        ]
    },
    {
        name: 'documents',
        id: 'document-page',
        modules: [
            {
                name: 'documentPage',
                active: true,
                visible: true,
                url: 'views/documents/documentPage'
            }
        ]
    },
    // {
    //     name: 'error'
    // }
]

let bigModuleBoss = function (array) {
    // const parent = document.getElementById('app')
    const parent = document.querySelector('.content')
    console.log(array)
    // let iter = 0
    //
    array.forEach((line) => {
        (line.visible == true) ? makeImport(line) : console.log('not start?');
    });
    //
    function makeImport(object) {
        object.visible = true
        // iter++;

        let pathUrl = String(object.url)
        console.log('----------------')
        console.log(pathUrl)
        import('./temps/' + pathUrl)
            .then(obj => {
                console.log(obj)
                // console.log(obj.tpl.content())
                parent.insertAdjacentHTML('beforeend', obj.tpl.content())
                return obj
            })
            .then((obj) => {
                obj.tpl.func() // включим внурениий функционал модуля
            })
        
    }
    if (array.length > 1) {
        // let i = 0
        // for (let t = 2; t < array.length; t++) {
        //     setTimeout(() => {
        //         console.log('iteration')
        //         makeImport(array[t]);
        //         if (t == array.length - 1 && (!document.querySelector('footer'))) {
        //             import('./temps/views/otherModules/footer')
        //                 .then((obj) => {
        //                     parent.insertAdjacentHTML('afterend', obj.tpl.content())
        //                     return obj
        //                 })
        //                 .then((obj) => {
        //                     obj.tpl.func() // включим внурениий функционал модуля
        //                 })
        //         }
        //     }, t*8000)
        // }
        //
        // начать слушать скролы
        //
        function scrollHandler() {
            let innerBlocks = document.querySelectorAll('.inner-block');
            let innerBlocksHeight = 0;
            for (let i of innerBlocks) {
                innerBlocksHeight += i.getBoundingClientRect().height;
            }
            if (pageYOffset > innerBlocksHeight * 0.35) {
                let row = []
                for (let j of array) {
                    if (j.visible == false) {
                        // row = j;
                        makeImport(j);
                        break;
                    }
                }
                console.log(row, 'залп!')
                
            }
            if (innerBlocks.length == array.length && !document.querySelector('footer')) {
                import('./temps/views/otherModules/footer')
                .then((obj) => {
                    parent.insertAdjacentHTML('afterend', obj.tpl.content())
                    return obj
                })
                .then((obj) => {
                    obj.tpl.func() // включим внурениий функционал модуля
                })
                window.removeEventListener('scroll', scrollHandler)
            }
            let activeRoutes = Array.from(document.querySelectorAll('[route]'));
            function weAreLeaving() {
                window.removeEventListener('scroll', scrollHandler);
                activeRoutes.forEach(function(route){
                    route.removeEventListener('click', weAreLeaving, false);
                });
            }
            activeRoutes.forEach(function(route){
                route.addEventListener('click', weAreLeaving, false);
            });
            console.log(pageYOffset, innerBlocksHeight)
        }
        window.addEventListener('scroll', scrollHandler)
    } else {
        if (!document.querySelector('footer')) {
            import('./temps/views/otherModules/footer')
                .then((obj) => {
                    parent.insertAdjacentHTML('afterend', obj.tpl.content())
                    return obj
                })
                .then((obj) => {
                    obj.tpl.func() // включим внурениий функционал модуля
                }) 
        }       
    }
}

let activeRoutes = Array.from(document.querySelectorAll('[route]'))

function navigateMovie(route) {
    let routeInfo = myRoute.routes.filter(function(r){
        return r.path === route;
    })[0];
    // console.log(route, routeInfo)
    if (!routeInfo) {
        window.history.pushState({}, 'name', 'erorr')
        //
        // function movie
    } else {
        window.history.pushState({}, 'name', routeInfo.path)
        // function movie
        let nameView = routeInfo.name
        let thisView = viewsList.filter(function(param){
            return param.name === nameView
        })
        console.log(thisView[0].modules)
        backToNull(viewsList);
        // import('./' + thisView[0].url)
        document.querySelector('.content').innerHTML = ''
        document.querySelector('.content').setAttribute('id', thisView[0].id)
        if (routeInfo.path === '/') {
            document.querySelector('body').setAttribute('id', 'main-page');
        } else {
            document.querySelector('body').setAttribute('id', '');
        }
        bigModuleBoss(thisView[0].modules)
    }
}

function navigate(event) {
    console.log('---------------------------\n---------new page----------\n---------------------------')
    let route = (event.target.getAttribute('route')) ? event.target.getAttribute('route') : event.target.parentElement.getAttribute('route');
    navigateMovie(route);
    // console.log(routeInfo)
    event.preventDefault();
}

activeRoutes.forEach(function(route){
    route.addEventListener('click', navigate, false);
})

let currentPath = window.location.pathname;
navigateMovie(currentPath);

function backToNull(array) {
    array.forEach((object) => {
        object.modules.forEach((obj) => {
            obj.visible = obj.active
        })
    })
}