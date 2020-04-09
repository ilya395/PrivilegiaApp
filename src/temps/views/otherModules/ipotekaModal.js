const path  = require('path')

export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <div class="modal ipoteka-modal">
        <div class="close"><img src="temps/img/catalog/close.png"></div>
        <div class="main-form">
            <h1>Консультация по ипотеке</h1>
            <p>Оставьте свой номер, мы перезвоним</p>
            <form action="">
                <input type="hidden" name="title">
                <div class="form-el-wr">
                    <input type="text" name="phone" placeholder="+7(___)___-__-__" class="phonemask">
                    <button><img src="temps/img/catalog/btn-ar.png"></button>
                </div>
                <div class="toCenter">
                    <input type="checkbox" id="agree" name="agree" checked>
                    <label for="agree">согласен на <a href="#">обработку персональных данных</a></label>
                </div>
            </form>
        </div>
        <div class="thnk-block">
            <h1>Спасибо!</h1>
            <p>Мы свяжемся с Вами в ближайшее время</p>
        </div>
    </div>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.modal.ipoteka-modal')
    wrap.classList.add('visible')
    //

    function send() {
        event.preventDefault()
        console.log('start send')
        let title = document.querySelector('.modal.ipoteka-modal form input[name="title"]')
        let phone = document.querySelector('.modal.ipoteka-modal form input[name="phone"]')
        let whatWithPhone = imOkey(phone.value);

        console.log(phone.value, title.value)

        let data = `action=action_fetch&phone=${phone.value}&title=${title.value}`

        let sendAjax = function (formData) {
            let newPath = path.resolve(__dirname, './listener.php')
            console.log(newPath)
            fetch(
                newPath, // '../../../../listener.php', // точка входа
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded', // отправляемые данные 
                    },
                    body: formData
                }
            )
            .then(
                response => {
                    console.log('Сообщение отправлено методом fetch')
                    console.log(response)
                    inputBlockSeccess()
                    
                    // goalSender(document.querySelector('.give-me-lead-plz'))
                }
            )
            .then(() => {
                phone.value = ''
            })
            .catch(
                error => {
                    console.error(error)
                }
            )
        }
        // if ( (phone.value != null && phone.value != undefined && phone.value != '' && whatWithPhone == true) && (titleIsOkey(title.value) == true) ) {
        //     sendAjax(data)
        //     console.log(data)
        // }
        sendAjax(data)
    }
    const sendBtn = document.querySelector('.modal.ipoteka-modal form button')
    sendBtn.addEventListener('click', send)

    function openIpotekaModal() {

        $('.overlay .ipoteka-modal').css('display', 'block');
        $('.overlay').fadeIn();

        var inputmask = $('.phonemask');
    
        Inputmask.extendDefinitions({
          'f': {"validator": "[9\(\)\.\+/ ]"}
        });
        
        if (inputmask.length) {
            inputmask.inputmask({
                mask: "+7(f99)999-99-99"
            });	
        }

        $('.overlay .close').click(function() {
            $('.overlay').fadeOut();
            $('.overlay .modal').fadeOut();
        });    

    }
    $('.ipoteka-open').click(openIpotekaModal);

    openIpotekaModal()

    //

    function imOkey(n) {
        console.log(n)
        if (n != '' && n != null && n != 'undefibed') {
            var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            let str = n.split('');
            var countNumber = 0;
            for(var i = 0; i < str.length; i++) {
                for(var j = 0; j < numbersArray.length; j++) {
                    if (str[i] == numbersArray[j]) {
                        countNumber++;
                    };
                };
            };
        
            var goodOrBadValue = false;
            var badNumbers = [
                "+7(911)111-11-11", 
                "+7(922)222-22-22", 
                "+7(933)333-33-33",
                "+7(944)444-44-44",
                "+7(955)555-55-55",
                "+7(966)666-66-66",
                "+7(977)777-77-77",
                "+7(988)888-88-88",
                "+7(999)999-99-99"
                // "+7(912)345-67-89"
                ];
            for( var i = 0; i < badNumbers.length; i++) {
                if (n == badNumbers[i]) {
                    goodOrBadValue = true;
                };
            }; 
            
            // console.log(n, typeof n, goodOrBadValue);
            if (countNumber == 11 && goodOrBadValue == false) {
                return true;
            } else {
                return false;
            };
        }
    }
    function titleIsOkey(t) {
        let titles = [
            'Вызвана форма со старницы "«Привилегия» для семьи"',
            'Вызвана форма со старницы "Гибкая система рассрочки и отсрочка от застройщика',
            'Оплата материнским капиталом',
            'Вызвана форма со старницы "Ипотека от 8,7%"'
        ]
        let answer = titles.forEach((item) => {
            if (item === t) {
                return true
            } else {
                return false
            }
        })
    }
    function inputBlockSeccess() {
        console.log('start')
        let thnkElem = document.querySelector('.modal.ipoteka-modal .thnk-block')

        thnkElem.classList.add('vkl')
        thnkElem.classList.remove('transparent')
        thnkElem.classList.add('movie')

        setTimeout(() => {
            function handler() {
                thnkElem.classList.remove('vkl')
                //
                thnkElem.removeEventListener('transitionend', handler)
            }
            thnkElem.addEventListener('transitionend', handler)
            thnkElem.classList.remove('movie')
            thnkElem.classList.add('transparent') 
        }, 3000)
    }
}