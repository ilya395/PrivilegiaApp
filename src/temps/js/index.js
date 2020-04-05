var s_width = $(window).width();
var s_height = $(window).height();

$(document).ready(function() {
    
    var inputmask = $('.phonemask');
    
    Inputmask.extendDefinitions({
      'f': {"validator": "[9\(\)\.\+/ ]"}
    });
    
	if (inputmask.length) {
		inputmask.inputmask({
			mask: "+7(f99)999-99-99"
		});	
	}
	
    /********************/
    // в мобильном меню
    // $("a.scrollto").click(function() {
    //     var elementClick = $(this).attr("href")
    //     var destination = $(elementClick).offset().top;
    //     jQuery("html:not(:animated),body:not(:animated)").animate({
    //         scrollTop: destination
    //     }, 800);
    //     return false;
    // });
    
    // в способах оплаты +
    // $(".scrollToEl").click(function() {
    //     var elementClick = $(this).attr("data-dest");
    //     console.log(elementClick);
    //     var destination = $(elementClick).offset().top;
    //     jQuery("html:not(:animated),body:not(:animated)").animate({
    //         scrollTop: destination
    //     }, 800);
    //     return false;
    // });
    
    // /*табы на главной*/
    // $('.complex-adv .complex-tab-btn').click(function() {
    //     var ind = $(this).index();
    //     if(!($(this).hasClass('active'))) {
    //         $('.complex-adv .complex-tab-btn').removeClass('active');
    //         $('.complex-adv .complex-tab-btn').eq(ind).addClass('active');
    //         $('.complex-adv .cc_item').removeClass('active');
    //         $('.complex-adv .cc_item').eq(ind).addClass('active');
    //     }
    // });
    
    // $('.complex-adv .all-news-btn').click(function() {
    //     $('.complex-adv .complex-adv-extra').css('display', 'flex');
    //     $('.complex-adv .all-news-btn').css('display', 'none');
    // });
    
    
    // $('.view .view-button').click(function() {
    //     $('.view .mask').fadeOut();
    // });
    
    
    /*модалки*/
    $('.callback-open').click(function() {
        $('.overlay .form-modal').css('display', 'block');
        $('.overlay').fadeIn();
        if($(this).hasClass('af_header-btn')) {
            $('.overlay .form-modal form').attr('id','af_header');
        }
        if($(this).hasClass('af_contacts-btn')) {
            $('.overlay .form-modal form').attr('id','af_contacts');
        }
    });
    
    $('.ipoteka-open').click(function() {
        $('.overlay .ipoteka-modal').css('display', 'block');
        $('.overlay').fadeIn();
    });
    
    $('.overlay .close').click(function() {
        $('.overlay').fadeOut();
        $('.overlay .modal').fadeOut();
    });
    
    $('.overlay .continue').click(function() {
        $('.overlay').fadeOut();
        $('.overlay .modal').fadeOut();
    });
    
    $('.overlay').click(function(e) {
        if($(e.target).hasClass('overlay')) {
            $('.overlay').fadeOut();
            $('.overlay .modal').fadeOut();
        }
    });
    
    $('.cm-open').click(function() {
        var data = $(this).data();
        
        $.post('ajaxcomplex.json', data, function(data) {
            $('#complex-modal').html(data);
            
            $('.overlay .close').click(function() {
                $('.overlay').fadeOut();
                $('.overlay .modal').fadeOut();
            });
            
            $('.overlay .complex-modal form').attr('id','af_start');
            
            var inputmask = $('.phonemask');
    
            Inputmask.extendDefinitions({
              'f': {"validator": "[9\(\)\.\+/ ]"}
            });
            
        	if (inputmask.length) {
        		inputmask.inputmask({
        			mask: "+7(f99)999-99-99"
        		});	
        	}
        });
        
        $('.overlay .complex-modal').css('display', 'block');
        $('.overlay').fadeIn();
        
    });
    
    // хз что это
    // var resource = $.urlParam('resource');
    // idStr = "#om" + resource
    // if(resource !== "") {
    //     $(idStr).click();
    // }
    
    // в index.js
    // $('.burger').click(function() {
    //     $('.menu-mob').animate({
    //         width: '100%'
    //     }, 400);
    // });
    
    // в мобильном меню
    // $('.menu-mob .close-mob').click(function() {
    //     $('.menu-mob').animate({
    //         width: '0%'
    //     }, 400);
    // });
    
    // $('.menu-mob nav a').click(function() {
    //     $('.menu-mob').animate({
    //         width: '0%'
    //     }, 400);
    // });
    
    /*********/
    /*слайдеры*/
    
    // +
    // if($('#specBlock .swiper-slide').length <= 1 ) {
    //     $('#specBlock .arrows').css('display', 'none');
    // } else {
    //     var swiper = new Swiper('#main-swiper', {
    //         speed: 700,
    //         grabCursor: true,
    //         centeredSlides: true,
    //         loop: true,
    //         slidesPerView: 1,
    //         autoplay: {
    //             delay: 3000,
    //         },
    //         navigation: {
    //             nextEl: '#specBlock .right',
    //             prevEl: '#specBlock .left',
    //         }
    //     });
    // }
    
    if(s_width <=500) {
        var swiper_pfev1 = new Swiper('#pfev_swiper1', {
            speed: 700,
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            //slidesPerView: 1,
            navigation: {
                nextEl: '.pfev_swiper1-arrow.right',
                prevEl: '.pfev_swiper1-arrow.left',
            }
        });
    }
    
    if(s_width <=500) {
        var swiper_pfev2 = new Swiper('#pfev_swiper2', {
            speed: 700,
            grabCursor: true,
            navigation: {
                nextEl: '.pfev_swiper2-arrow.right',
                prevEl: '.pfev_swiper2-arrow.left',
            }
        });
    }
    
    // +
    // new SuperSlider({
    //     wrapper: $('.beauty-sl-wr')
    // });

    // в способах оплвты +
    // new SuperSliderPay({
    //     wrapper: $('.pay-sl-top-wr')
    // });
    

    // нету
    // if(s_width <= 500) {
    //     new SuperSlider2({
    //         uls: $('.main-plan-wr .bs-wr'), 
    //         lefts: $('.main-plan-wr .left'),
    //         rights: $('.main-plan-wr .right'),
    //         hovers: $('.main-plan-mob .bs-hover-wr')
    //     });
    // }
    
    // +
    // new SuperSlider1({
    //     uls: $('.hod-s-sl-wrapper .hod-s-sl'), 
    //     lefts: $('.hod-s-sl-wrapper .left'),
    //     rights: $('.hod-s-sl-wrapper .right')
    // });
    /********/
});

// close modal
$('.modal_call_main_close').on('click', function () {
    $('#modal-thnk').css({
        'display': 'none',
        'opacity': '0'
    });
});
// 

$(document).on('submit', '.ajax_form', function() {
    afValidated = true;
    
    var phoneValue;
    phoneValue = $(this).find('input[name="phone"]').val();
    
    var wrongPhones = ["+7(911)111-11-11", 
                       "+7(922)222-22-22", 
                       "+7(933)333-33-33",
                       "+7(944)444-44-44",
                       "+7(955)555-55-55",
                       "+7(966)666-66-66",
                       "+7(977)777-77-77",
                       "+7(988)888-88-88",
                       "+7(999)999-99-99",
                       "+7(912)345-67-89"];
                       
    var masLength = wrongPhones.length;
    
    for( var i = 0; i < masLength; i++) {
        if (phoneValue == wrongPhones[i]) {
            AjaxForm.Message.error('Вы ввели несуществующий номер');
            afValidated = false;
            return;
        }
    } 

});


$(document).on('is_sucsessful', function(event, response) {
    form = response.form;
    
    // отправка заявки в calltouch
    var ct_fio = $(form).find('input[name="name"]').val();
    var ct_phone = $(form).find('input[name="phone"]').val();
    var ct_subject = $(form).attr('id')
    var ct_node_id = '8';
    var ct_site_id = '26428';
    var ct_data = {
        fio: ct_fio,
        phoneNumber: ct_phone,
        subject: ct_subject,
        sessionId: window.call_value
    };
    
    jQuery.ajax({
        url: '  https://api-node'+ct_node_id+'.calltouch.ru/calls-service/RestAPI/requests/'+ct_site_id+'/register/',
        dataType: 'json',
        type: 'POST',
        data: ct_data
    });
    // end отправка заявки в calltouch
    
    
    if($(form).attr('id')  == "l_form-1-europe") {
        yaCounter50835075.reachGoal('europe');
        gtag('event', 'submit', {'event_category': 'form','event_label': 'europe'});
    } else if($(form).attr('id')  == "l_form-1-investments") {
        yaCounter50835075.reachGoal('investments');
        gtag('event', 'submit', {'event_category': 'form','event_label': 'investments'});
    } else if($(form).attr('id')  == "l_form-1-privilege") {
        yaCounter50835075.reachGoal('privilege');
        gtag('event', 'submit', {'event_category': 'form','event_label': 'privilege'});
    } else if($(form).attr('id')  == "form-fod") {
        yaCounter50835075.reachGoal('land_kvrtiramechtu');
        gtag('event', 'submit', {'event_category': 'form','event_label': 'land_kvrtiramechtu'});
    } else if($(form).attr('id')  == "pfev_form") {
        yaCounter50835075.reachGoal('akciya');
        gtag('event', 'submit', {'event_category': 'form','event_label': 'akciya'});
    } else {
        yaCounter50835075.reachGoal('callback');
        gtag('event', 'submit', {'event_category': 'form','event_label': 'callback'});
    }
    
    
    var landWrapper = form.closest(".l_form-wr");
    landWrapper.find('.inside').css('display','none');
    landWrapper.find('.after-form').css('display','block');
    
    if(($('.overlay').css('display') == 'block') && ($(form).attr('id')  != "exit-form")) {
        $('.overlay .modal').fadeOut();
        $('.overlay .thnk-modal').fadeIn();
    } else if($(form).attr('id')  != "exit-form") {
        $('.overlay .thnk-modal').css('display', 'block');
        $('.overlay').fadeIn();
    }
 
    if($(form).attr('id')  == "af_header") {
        $('#modal-thnk').css({
            'display': 'block',
            'opacity': '1'
        });        
        //yaCounter50835075.reachGoal('certificate');
        //gtag('event', 'submit', {'event_category': 'form','event_label': 'certificate'});
    } 
    
    if($(form).attr('id')  == "luck-page_form") {
        $('#modal-thnk').css({
            'display': 'block',
            'opacity': '1'
        });        
        yaCounter50835075.reachGoal('certificate');
        gtag('event', 'submit', {'event_category': 'form','event_label': 'certificate'});
    }
});

// +
// function SuperSlider(params) {
    
//     var wrapper = params.wrapper;
    
//     wrapper.each(function() {
        
//         var ulBanner = $(this).find('.list-sl');
//         var leftBan = $(this).find('.left');
//         var rightBan = $(this).find('.right');
//         var controlsBan = $(this).find('.controls');
//         var liWidthBan, countBan, iBan, indBan, marginBan;
        
//         countBan = ulBanner.find('li').length;
    
//         liWidthBan = parseInt(ulBanner.find('li').css('width'));
        
//         if(countBan == 1) {
//             leftBan.css('display', 'none');
//             rightBan.css('display', 'none');
//             controlsBan.css('display', 'none');
//         } else {
//             for(iBan=0; iBan<countBan; iBan++) {
//                 controlsBan.append('<li>');
//             }
//             controlsBan.find('li:first-child').addClass('active');
//             ulBanner.find('li:first-child').addClass('active');
//         }
        
//         rightBan.click($.debounce(400, function() {
//             indBan = ulBanner.find('.active').index();
//             if(indBan == (countBan-1)) {
//                 ulBanner.animate({
//                     marginLeft: 0
//                 }, 700);
//                 ulBanner.find('li').siblings().removeClass('active');
//                 ulBanner.find('li').eq(0).addClass('active');
//                 controlsBan.find('li').siblings().removeClass('active');
//                 controlsBan.find('li').eq(0).addClass('active');
//             } else {
//                 marginBan = parseInt(ulBanner.css('margin-left'));
//                 ulBanner.animate({
//                     marginLeft: marginBan-liWidthBan
//                 }, 700);
//                 ulBanner.find('li').siblings().removeClass('active');
//                 ulBanner.find('li').eq(indBan+1).addClass('active');
//                 controlsBan.find('li').siblings().removeClass('active');
//                 controlsBan.find('li').eq(indBan+1).addClass('active');
//             }
//         }));
        
//         leftBan.click($.debounce(400, function() {
//             indBan = ulBanner.find('.active').index();
//             if(indBan === 0) {
//                 ulBanner.animate({
//                     marginLeft: -liWidthBan*(countBan-1)
//                 }, 700);
//                 ulBanner.find('li').siblings().removeClass('active');
//                 ulBanner.find('li').eq(countBan-1).addClass('active');
//                 controlsBan.find('li').siblings().removeClass('active');
//                 controlsBan.find('li').eq(countBan-1).addClass('active');
//             } else {
//                 marginBan = parseInt(ulBanner.css('margin-left'));
//                 ulBanner.animate({
//                     marginLeft: marginBan+liWidthBan
//                 }, 700);
//                 ulBanner.find('li').siblings().removeClass('active');
//                 ulBanner.find('li').eq(indBan-1).addClass('active');
//                 controlsBan.find('li').siblings().removeClass('active');
//                 controlsBan.find('li').eq(indBan-1).addClass('active');
//             }
//         }));
        
//         controlsBan.find('li').click($.debounce(200, function() {
//             indBan = $(this).index();
//             ulBanner.animate({
//                 marginLeft: -indBan*liWidthBan
//             }, 700);
//             ulBanner.find('li').siblings().removeClass('active');
//             ulBanner.find('li').eq(indBan).addClass('active');
//             controlsBan.find('li').siblings().removeClass('active');
//             controlsBan.find('li').eq(indBan).addClass('active');
//         }));
        
//     });
    
// }

//+
// function SuperSlider1(params) {
//     var ulBanner = params.uls;
//     var leftBan = params.lefts;
//     var rightBan = params.rights;
//     var liWidthBan, countBan, iBan, indBan, marginBan;
    
//     countBan = ulBanner.find('li').length;
    
//     liWidthBan = parseInt(ulBanner.find('li').css('width')) + parseInt(ulBanner.find('li').css('margin-right'));
    
//     if(countBan <= 4) {
//         leftBan.css('display', 'none');
//         rightBan.css('display', 'none');
//     } else {
//         ulBanner.find('li:first-child').addClass('active');
//     }
    
//     rightBan.click($.debounce(200, function() {
//         indBan = ulBanner.find('.active').index();
//         if(indBan == (countBan-5)) {
//             ulBanner.animate({
//                 marginLeft: 0
//             }, 700);
//             ulBanner.find('li').siblings().removeClass('active');
//             ulBanner.find('li').eq(0).addClass('active');
//         } else {
//             marginBan = parseInt(ulBanner.css('margin-left'));
//             ulBanner.animate({
//                 marginLeft: marginBan-liWidthBan
//             }, 700);
//             ulBanner.find('li').siblings().removeClass('active');
//             ulBanner.find('li').eq(indBan+1).addClass('active');
//         }
//     }));
    
//     leftBan.click($.debounce(200, function() {
//         indBan = ulBanner.find('.active').index();
//         if(indBan === 0) {
//             ulBanner.animate({
//                 marginLeft: -liWidthBan*(countBan-5)
//             }, 700);
//             ulBanner.find('li').siblings().removeClass('active');
//             ulBanner.find('li').eq(countBan-5).addClass('active');
//         } else {
//             marginBan = parseInt(ulBanner.css('margin-left'));
//             ulBanner.animate({
//                 marginLeft: marginBan+liWidthBan
//             }, 700);
//             ulBanner.find('li').siblings().removeClass('active');
//             ulBanner.find('li').eq(indBan-1).addClass('active');
//         }
//     }));
// }

// нету
// function SuperSlider2(params) {
//     var ulBanner = params.uls;
//     var leftBan = params.lefts;
//     var rightBan = params.rights;
//     var ulHover = params.hovers;
//     var liWidthBan, countBan, iBan, indBan, marginBan;
    
//     countBan = ulBanner.find('.bs').length;
    
//     liWidthBan = parseInt(ulBanner.find('.bs').css('width'));
    
//     if(countBan == 1) {
//         leftBan.css('display', 'none');
//         rightBan.css('display', 'none');
//     } else {
//         ulBanner.find('.bs:first-child').addClass('active');
//         ulHover.find('.bs-hover:first-child').addClass('active');
//     }
    
//     rightBan.click($.debounce(200, function() {
//         indBan = ulBanner.find('.active').index();
//         if(indBan == (countBan-1)) {
//             ulBanner.animate({
//                 marginLeft: 0
//             }, 700);
//             ulBanner.find('.bs').siblings().removeClass('active');
//             ulBanner.find('.bs').eq(0).addClass('active');
//             ulHover.find('.bs-hover').siblings().removeClass('active');
//             ulHover.find('.bs-hover').eq(0).addClass('active');
//         } else {
//             marginBan = parseInt(ulBanner.css('margin-left'));
//             ulBanner.animate({
//                 marginLeft: marginBan-liWidthBan
//             }, 700);
//             ulBanner.find('.bs').siblings().removeClass('active');
//             ulBanner.find('.bs').eq(indBan+1).addClass('active');
//             ulHover.find('.bs-hover').siblings().removeClass('active');
//             ulHover.find('.bs-hover').eq(indBan+1).addClass('active');
//         }
//     }));
    
//     leftBan.click($.debounce(200, function() {
//         indBan = ulBanner.find('.active').index();
//         if(indBan === 0) {
//             ulBanner.animate({
//                 marginLeft: -liWidthBan*(countBan-1)
//             }, 700);
//             ulBanner.find('.bs').siblings().removeClass('active');
//             ulBanner.find('.bs').eq(countBan-1).addClass('active');
//             ulHover.find('.bs-hover').siblings().removeClass('active');
//             ulHover.find('.bs-hover').eq(countBan-1).addClass('active');
//         } else {
//             marginBan = parseInt(ulBanner.css('margin-left'));
//             ulBanner.animate({
//                 marginLeft: marginBan+liWidthBan
//             }, 700);
//             ulBanner.find('.bs').siblings().removeClass('active');
//             ulBanner.find('.bs').eq(indBan-1).addClass('active');
//             ulHover.find('.bs-hover').siblings().removeClass('active');
//             ulHover.find('.bs-hover').eq(indBan-1).addClass('active');
//         }
//     }));
// }

// в способах оплаты
// function SuperSliderPay(params) {
    
//     var wrapper = params.wrapper;
    
//     wrapper.each(function() {
        
//         var ulBanner = $(this).find('.list-sl');
//         var leftBan = $(this).find('.left');
//         var rightBan = $(this).find('.right');
//         var controlsBan = $(this).find('.controls');
//         var liWidthBan, countBan, iBan, indBan, marginBan;
        
//         countBan = ulBanner.find('li').length;
    
//         liWidthBan = parseInt(ulBanner.find('li').css('width'));
        
//         if(countBan == 1) {
//             leftBan.css('display', 'none');
//             rightBan.css('display', 'none');
//             controlsBan.css('display', 'none');
//         } else {
//             for(iBan=0; iBan<countBan; iBan++) {
//                 controlsBan.append('<li>');
//             }
//             controlsBan.find('li:first-child').addClass('active');
//             ulBanner.find('li:first-child').addClass('active');
//         }
        
//         rightBan.click($.debounce(400, function() {
//             indBan = ulBanner.find('.active').index();
//             if(indBan == (countBan-1)) {
//                 ulBanner.animate({
//                     marginLeft: 0
//                 }, 700);
//                 $('#pay-slider-wrapper .pay-content-sl').animate({
//                     marginLeft: 0
//                 }, 700);
//                 ulBanner.find('li').siblings().removeClass('active');
//                 ulBanner.find('li').eq(0).addClass('active');
//                 controlsBan.find('li').siblings().removeClass('active');
//                 controlsBan.find('li').eq(0).addClass('active');
//             } else {
//                 marginBan = parseInt(ulBanner.css('margin-left'));
//                 ulBanner.animate({
//                     marginLeft: marginBan-liWidthBan
//                 }, 700);
//                 $('#pay-slider-wrapper .pay-content-sl').animate({
//                     marginLeft: marginBan-liWidthBan
//                 }, 700);
//                 ulBanner.find('li').siblings().removeClass('active');
//                 ulBanner.find('li').eq(indBan+1).addClass('active');
//                 controlsBan.find('li').siblings().removeClass('active');
//                 controlsBan.find('li').eq(indBan+1).addClass('active');
//             }
//         }));
        
//         leftBan.click($.debounce(400, function() {
//             indBan = ulBanner.find('.active').index();
//             if(indBan === 0) {
//                 ulBanner.animate({
//                     marginLeft: -liWidthBan*(countBan-1)
//                 }, 700);
//                 $('#pay-slider-wrapper .pay-content-sl').animate({
//                     marginLeft: -liWidthBan*(countBan-1)
//                 }, 700);
//                 ulBanner.find('li').siblings().removeClass('active');
//                 ulBanner.find('li').eq(countBan-1).addClass('active');
//                 controlsBan.find('li').siblings().removeClass('active');
//                 controlsBan.find('li').eq(countBan-1).addClass('active');
//             } else {
//                 marginBan = parseInt(ulBanner.css('margin-left'));
//                 ulBanner.animate({
//                     marginLeft: marginBan+liWidthBan
//                 }, 700);
//                 $('#pay-slider-wrapper .pay-content-sl').animate({
//                     marginLeft: marginBan+liWidthBan
//                 }, 700);
//                 ulBanner.find('li').siblings().removeClass('active');
//                 ulBanner.find('li').eq(indBan-1).addClass('active');
//                 controlsBan.find('li').siblings().removeClass('active');
//                 controlsBan.find('li').eq(indBan-1).addClass('active');
//             }
//         }));
        
//         controlsBan.find('li').click($.debounce(200, function() {
//             indBan = $(this).index();
//             ulBanner.animate({
//                 marginLeft: -indBan*liWidthBan
//             }, 700);
//             $('#pay-slider-wrapper .pay-content-sl').animate({
//                 marginLeft: -indBan*liWidthBan
//             }, 700);
//             ulBanner.find('li').siblings().removeClass('active');
//             ulBanner.find('li').eq(indBan).addClass('active');
//             controlsBan.find('li').siblings().removeClass('active');
//             controlsBan.find('li').eq(indBan).addClass('active');
//         }));
        
//         $('#pay-slider-wrapper .controls-links').find('li').click($.debounce(200, function() {
//             indBan = $(this).index();
//             ulBanner.animate({
//                 marginLeft: -indBan*liWidthBan
//             }, 700);
//             $('#pay-slider-wrapper .pay-content-sl').animate({
//                 marginLeft: -indBan*liWidthBan
//             }, 700);
//             ulBanner.find('li').siblings().removeClass('active');
//             ulBanner.find('li').eq(indBan).addClass('active');
//             controlsBan.find('li').siblings().removeClass('active');
//             controlsBan.find('li').eq(indBan).addClass('active');
//         }));
        
//     });
    
// }

function lazyPictyres(){
    // console.log("lazyPictyres");
    if(document.querySelector(".complex-content")){
        // console.log("start!!!111");
        var btn = document.querySelector(".complex-adv .complex-content .button.all-news-btn");
        var items = document.querySelectorAll(".complex-adv .complex-content .complex-adv-extra .complex-item");
        function openNewsPlz(){
            for(var i = 0; i < items.length; i++){
                var innerImg = items[i].querySelector(".image img");
                // console.log(innerImg);
                innerImg.setAttribute('src', innerImg.dataset.imgSrc);
            }
            //
            btn.removeEventListener("click", openNewsPlz);
        };
        btn.addEventListener("click", openNewsPlz);
    }
};
document.addEventListener("DOMContentLoaded", lazyPictyres);
function buyBuy(){
  document.removeEventListener("DOMContentListener", lazyPictyres); 
  window.removeEventListener("unload", buyBuy); 
};
window.addEventListener("unload", buyBuy);
//
function lazyPictyresForHodStrOne(){
    if(document.querySelector(".hod-str")){
        if (window.matchMedia('(max-width: 576px)').matches) {
            var listMob = document.querySelectorAll(".hod-s-sl-over.mobile ul.hod-s-sl li img");
            // console.log(listMob);
            for(var m = 0; m < listMob.length; m++){
                listMob[m].src = listMob[m].dataset.imgSrc;
            }
        }else{
            var listDesc = document.querySelectorAll(".hod-s-sl-over.desktop ul.hod-s-sl li img");
            // console.log(listDesc);
            for(var d = 0; d < 4; d++){
                listDesc[d].src = listDesc[d].dataset.imgSrc;
            };        
        }        
    }
    //
    document.removeEventListener("DOMContentLoaded", lazyPictyresForHodStrOne)
};
document.addEventListener("DOMContentLoaded", lazyPictyresForHodStrOne);
//
function lazyPictyresForHodStrTwo(){
    if(document.querySelector(".hod-str")){
       if (window.matchMedia('(min-width: 577px)').matches) {
            var arrows = document.querySelectorAll(".hod-s-sl-wrapper .arrow.desktop");
            function pushOnArrow(){
                var listDesc = document.querySelectorAll(".hod-s-sl-over.desktop ul.hod-s-sl li img");
                // console.log(listDesc);
                for(var d = 4; d < listDesc.length; d++){
                    listDesc[d].src = listDesc[d].dataset.imgSrc;
                };  
                // console.log("Загружено, принима!й");                
            };
            for(var a = 0; a < arrows.length; a++){
                arrows[a].addEventListener("click", pushOnArrow);
            };
            //
            window.removeEventListener("load", lazyPictyresForHodStrTwo);
       }else{
           window.removeEventListener("load", lazyPictyresForHodStrTwo);
       }
    }else{
        window.removeEventListener("load", lazyPictyresForHodStrTwo);
    }
};
window.addEventListener("load", lazyPictyresForHodStrTwo);
//
window.addEventListener("load", function(){
    console.log("Загружена вся страница, включая стили, картинки и другие ресурсы");
    // in fucking ES5
    // console.log(window.location.pathname);
    // if (window.location.pathname == '/') {
    //     var deferredCollection = document.querySelector('.visibility ')
    //     for (var i = 1: i < deferredCollection.length - 1; i++) {
    //         setTimeout(function(){
    //           deferredCollection[i].classList.add('.visible-block') 
    //         }, i*3000)
    //     }        
    // }
});



