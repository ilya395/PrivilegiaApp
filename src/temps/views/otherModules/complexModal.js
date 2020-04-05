export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <div class="modal complex-modal" id="complex-modal">
        <div class="close">
            <img src="temps/img/catalog/close.png">
        </div>
        <div class="top-image">
            <img src="temps/img/1n.png">
        </div>
        <div class="bottom-text">
            <div class="label">
                О комплексе
            </div>
            <h2>Запоминающийся  внешний вид</h2>
            <p>
                Прогуливаясь по иностранным городам, мы в первую очередь обращаем внимание на местную архитектуру. Внешний вид «Привилегии» — еще одно преимущество комплекса. Яркий фасад из кирпича с цветными вставками выполнен в лучших традициях западноевропейских городов и гармонирует с природным окружением дома.
            </p>
            <ul>
                <li>
                    Современный авторский проект
                </li>
                <li>
                    Качественные отделочные материалы
                </li>
                <li>
                    Панорамное остекление балконов
                </li>
                <li>
                    Разноуровневый рельеф комплекса
                </li>
            </ul>
        </div>
    </div>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.modal.complex-modal')
    wrap.classList.add('visible')
    //
    $('.cm-open').click(function() {
        var data = $(this).data();
        
        // $.post('ajaxcomplex.json', data, function(data) {
        //     $('#complex-modal').html(data);
            
        //     // $('.overlay .close').click(function() {
        //     //     $('.overlay').fadeOut();
        //     //     $('.overlay .modal').fadeOut();
        //     // });
            
        //     $('.overlay .complex-modal form').attr('id','af_start');
            
        //     var inputmask = $('.phonemask');
    
        //     Inputmask.extendDefinitions({
        //       'f': {"validator": "[9\(\)\.\+/ ]"}
        //     });
            
        // 	if (inputmask.length) {
        // 		inputmask.inputmask({
        // 			mask: "+7(f99)999-99-99"
        // 		});	
        // 	}
        // });

        //

        $('.overlay .close').click(function() {
            $('.overlay').fadeOut();
            $('.overlay .modal').fadeOut();
        });

        //
        
        $('.overlay .complex-modal').css('display', 'block');
        $('.overlay').fadeIn();
        
    });

    $('.overlay .complex-modal').css('display', 'block');
    $('.overlay').fadeIn();

    $('.overlay .close').click(function() {
        $('.overlay').fadeOut();
        $('.overlay .modal').fadeOut();
    });
}