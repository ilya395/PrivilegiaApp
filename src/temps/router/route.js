// export class Route {
//     constructor(name, path, handler){
//         this.name = name,
//         this.path = path,
//         this.handler = handler
//     }

//     get name(){
//         return this._name
//     }
//     set name(name){
//         this._name = name
//     }

//     get path(){
//         return this._path
//     }
//     set path(path){
//         this._path = path
//     }

//     get handler() {
//         return this._handler
//     }
//     set handler(handler){
//         this._handler = handler
//     }
// }

// console.log(myRoute);
// let currentPath = window.location.pathname;
// if (currentPath === '/') {
//     container.querySelector('.plzWork').innerHTML = 'main' //
// } else {
//     let route = myRoute.routes.filter(function(r){
//         return r.path === currentPath;
//     })[0];
//     if (route) {
//         // console.log(route)
//         container.querySelector('.plzWork').innerHTML = 'not main' //
//     } else {
//         container.querySelector('.plzWork').innerHTML = '404' //
//     }
// }


// export let router = function() {
//     const el = document.getElementById('app')
//     return {
//         routes: {
//             '/': 'mainPage',
//             'sposobyi-oplatyi': 'paymentsPage',
//             'zastrojshhik': 'developerPage',
//             'dokumentacziya': 'documentsPage'
//         },
//         init: function() {
//             this._routes = [];
//             for (let route in this.routes) {
//                 let method = this.routes[route];
//                 this._routes.push({
//                     pattern: new RegExp('^' + route.replace(/:\w+/g,'(\\w+)') + '$'),
//                     callback: this[method]
//                 });
//             };
//         },
//         dispath: function(path) {
//             let i = this._routes.length;
//             while (i--) {
//                 let args = path.match(this._routes[i].pattern);
//                 if (args) {
//                     this._routes[i].callback.apply(this.args.slice(1))
//                 }
//             }
//         },
//         mainPage: function () {
//             el.innerHTML = 'главаня'
//         },
//         paymentsPage: function() {
//             el.innerHTML = 'способы оплаты'
//         },
//         developerPage: function () {
//             el.innerHTML = 'о застройщике'
//         },
//         documentsPage: function () {
//             el.innerHTML = 'документация'
//         }
//     }
// }

// // export function router (name, routes) {
// //     return {
// //         name: name,
// //         routes: routes
// //     }
// // }

// // import { route } from './route'

// // export class Router {
// //     constructor(){
// //         this.mode = 'history',
// //         this.routes = [],
// //         this.root = '/'
// //     }

// //     get root(){
// //         return this._root
// //     }
// //     set root(val){
// //         this._root = val
// //     }

// //     get mode() {
// //         return this._mode
// //     }
// //     set mode(val) {
// //         this._mode = (val == 'history' && window.history.pushState) ? 'history' : 'hash'
// //     }

// //     get routes(){
// //         return this._routes
// //     }
// //     set routes(val){
// //         this._routes = val
// //     }

// //     add(route){
// //         this.routes.push(new Router(route.name, route.path, route.handler))
// //         return this
// //     }

// //     navigate(route){
// //         route = route ? route : ''
// //         this.match(route) 
// //     }

// //     match(route){
// //         console.log(route, this.routes)
// //         for (let i = 0; i < this.routes.length; i++) {
// //             let paramNames = []
// //             console.log(this.routes[i].path)
// //             let regexPath = this.routes[i].path.replace(/([:*])(\w+)/g, function(full, colon, name){
// //                 paramNames.push(name)
// //                 return '([^\/]+)';
// //             }) + '(?:\/|$)';

// //             let routeMatch = route.match(new RegExp(regexPath))
// //             if (routeMatch !== null) {
// //                 let params = routeMatch
// //                 .slice(1, routeMatch.length)
// //                 .reduce((params, value, index) => {
// //                     if (params === null) {
// //                         params = {}
// //                     };
// //                     params[paramNames[index]] = value;
// //                     return params;
// //                 }, null); 

// //                 if (params === null) {
// //                     this.routes[i].handler()
// //                 } else {
// //                     this.routes[i].handler(params)
// //                 }
// //                 this.location(route)
// //             }
// //         }
// //     }

// //     location(route){
// //         if (this.mode === 'history') {
// //             window.history.pushState(null, null, this.root + route)
// //         } else {
// //             route = route.replace(/^\//, '').replace(/\/$/, '')
// //             window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + route
// //         }
// //     }
// // }