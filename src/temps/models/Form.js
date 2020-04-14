const path  = require('path')

export let formFromAkcii = function(formSection) {
    console.log('form is activated')
    let title = formSection.querySelector('input[name="title"]') || 'Форма обратной связи'
    let name = formSection.querySelector('input[name="name"]')
    let phone = formSection.querySelector('input[name="phone"]')

    let button = formSection.querySelector('button')

    // let whatWithPhone = imOkey(phone.value);
    // let whatWithName = nameIsOkey(name.value);

    //

    var inputmask = $('.phonemask');
    
    Inputmask.extendDefinitions({
      'f': {"validator": "[9\(\)\.\+/ ]"}
    });
    
    if (inputmask.length) {
        inputmask.inputmask({
            mask: "+7(f99)999-99-99"
        });	
    }

    //

    function handler() {
        event.preventDefault()

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
                    inputBlockSeccess()
                    console.log('Сообщение отправлено методом fetch')
                    console.log(response)
                    
                    // goalSender(document.querySelector('.give-me-lead-plz'))
                }
            )
            .then(() => {
                name.value = ''
                phone.value = ''
            })
            .catch(
                error => {
                    console.error(error)
                }
            )
        }
        // console.log(phone.value, name.value, whatWithPhone, imOkey(phone.value), whatWithName, nameIsOkey(name.value)) 
        if ( (phone.value != null && phone.value != undefined && phone.value != '' && imOkey(phone.value) == true) && (nameIsOkey(name.value) == true) ) {  
            sendAjax(data)
        }
    }

    function inputBlockSeccess() {
        if (!formSection.querySelector('.thnk-block')) {
            let thnkBlock = document.createElement('div')
            thnkBlock.classList.add('thnk-block')
            formSection.append(thnkBlock)
            thnkBlock.innerHTML = `
                <h1>Спасибо!</h1>
                <p>Мы свяжемся с Вами в ближайшее время</p>            
            `
            //
            onThnkBlock()
        } else {
            //
            onThnkBlock()
        }
        function onThnkBlock() {
            let thnkElem = formSection.querySelector('.thnk-block')

            thnkElem.classList.add('vkl')
            raf(function(){
                thnkElem.classList.remove('transparent')
                thnkElem.classList.add('movie')
            })
    
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

    //



    //

    const form = {
        listenToClick() {
            button.addEventListener('click', handler)
        }
    }

    return form
}

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
function nameIsOkey(n) {
    let otvet = false

    if (n != '' && n.length < 25) {
        otvet = true
    }

    return otvet
}
function titleIsOkey(t) {
    let titles = [
        'Вызвана форма со старницы "«Привилегия» для семьи"',
        'Вызвана форма со старницы "Гибкая система рассрочки и отсрочка от застройщика',
        'Оплата материнским капиталом',
        'Вызвана форма со старницы "Ипотека от 8,7%"',
        'Форма обратной связи'
    ]
    let answer = false
    titles.forEach((item) => {
        if (item === t) {
            answer = true
        } else {
            answer = false
        }
    })
    return answer
}

function raf(fn){
    window.requestAnimationFrame(function(){
        window.requestAnimationFrame(function(){
            fn();
        });
    });
}