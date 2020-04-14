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
        <div class="complex-modal__content">
            <div class="top-image">
            </div>
            <div class="bottom-text">
            </div>
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

        // $('.overlay .close').click(function() {
        //     $('.overlay').fadeOut();
        //     $('.overlay .modal').fadeOut();
        // });

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