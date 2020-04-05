export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <section class="beauty-slider inner-block">
        <div class="container">
            <h1>Посмотрите, каким он получится</h1>
        </div>
        <div class="beauty-sl-wr">
            <div class="beauty-sl-over">
                <ul class="beauty-sl list-sl">
                    <li>
                        <picture>
                            <source srcset="temps/img/for_mobs/sl-1.jpg 1x, temps/img/for_mobs/sl-1.jpg 2x" media="(max-width:500px)" type="image/jpg">
                            <img src="temps/img/sl-1.png" srcset="temps/img/sl-1.png 2x" alt="Внешний вид на ЖК Привилегия">
                        </picture>
                    </li>
                    <li>
                        <picture>
                            <source srcset="temps/img/for_mobs/sl-2.jpg 1x, temps/img/for_mobs/sl-2.jpg 2x" media="(max-width:500px)" type="image/jpg">
                            <img src="temps/img/sl-2.png" srcset="temps/img/sl-2.png 2x" alt="Внешний вид на ЖК Привилегия">
                        </picture>
                    </li>
                    <li>
                        <picture>
                            <source srcset="temps/img/for_mobs/sl-3.jpg 1x, temps/img/for_mobs/sl-3.jpg 2x" media="(max-width:500px)" type="image/jpg">
                            <img src="temps/img/sl-3.png" srcset="temps/img/sl-3.png 2x" alt="Внешний вид на ЖК Привилегия">
                        </picture>
                    </li>
                    <li>
                        <picture>
                            <source srcset="temps/img/for_mobs/sl-4.jpg 1x, temps/img/for_mobs/sl-4.jpg 2x" media="(max-width:500px)" type="image/jpg">
                            <img src="temps/img/sl-4.png" srcset="temps/img/sl-4.png 2x" alt="Внешний вид на ЖК Привилегия">
                        </picture>
                    </li>
                </ul>
            </div>
            <div class="arrow left"><img src="temps/img/arrow-l.png"></div>
            <div class="arrow right"><img src="temps/img/arrow-r.png"></div>
            <ul class="controls"></ul>
        </div>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.beauty-slider')
    wrap.classList.add('visible')
    //
    function SuperSlider(params) {

        var wrapper = params.wrapper;
        
        wrapper.each(function() {
            
            var ulBanner = $(this).find('.list-sl');
            var leftBan = $(this).find('.left');
            var rightBan = $(this).find('.right');
            var controlsBan = $(this).find('.controls');
            var liWidthBan, countBan, iBan, indBan, marginBan;
            
            countBan = ulBanner.find('li').length;
        
            liWidthBan = parseInt(ulBanner.find('li').css('width'));
            
            if(countBan == 1) {
                leftBan.css('display', 'none');
                rightBan.css('display', 'none');
                controlsBan.css('display', 'none');
            } else {
                for(iBan=0; iBan<countBan; iBan++) {
                    controlsBan.append('<li>');
                }
                controlsBan.find('li:first-child').addClass('active');
                ulBanner.find('li:first-child').addClass('active');
            }
            
            rightBan.click(
                // $.debounce(400, 
            function() {
                indBan = ulBanner.find('.active').index();
                if(indBan == (countBan-1)) {
                    ulBanner.animate({
                        marginLeft: 0
                    }, 700);
                    ulBanner.find('li').siblings().removeClass('active');
                    ulBanner.find('li').eq(0).addClass('active');
                    controlsBan.find('li').siblings().removeClass('active');
                    controlsBan.find('li').eq(0).addClass('active');
                } else {
                    marginBan = parseInt(ulBanner.css('margin-left'));
                    ulBanner.animate({
                        marginLeft: marginBan-liWidthBan
                    }, 700);
                    ulBanner.find('li').siblings().removeClass('active');
                    ulBanner.find('li').eq(indBan+1).addClass('active');
                    controlsBan.find('li').siblings().removeClass('active');
                    controlsBan.find('li').eq(indBan+1).addClass('active');
                }
            }
            // )
            );
            
            leftBan.click(
                // $.debounce(400, 
                function() {
                    indBan = ulBanner.find('.active').index();
                    if(indBan === 0) {
                        ulBanner.animate({
                            marginLeft: -liWidthBan*(countBan-1)
                        }, 700);
                        ulBanner.find('li').siblings().removeClass('active');
                        ulBanner.find('li').eq(countBan-1).addClass('active');
                        controlsBan.find('li').siblings().removeClass('active');
                        controlsBan.find('li').eq(countBan-1).addClass('active');
                    } else {
                        marginBan = parseInt(ulBanner.css('margin-left'));
                        ulBanner.animate({
                            marginLeft: marginBan+liWidthBan
                        }, 700);
                        ulBanner.find('li').siblings().removeClass('active');
                        ulBanner.find('li').eq(indBan-1).addClass('active');
                        controlsBan.find('li').siblings().removeClass('active');
                        controlsBan.find('li').eq(indBan-1).addClass('active');
                    }
                }
            // )
            );
            
            controlsBan.find('li').click(
                // $.debounce(200, 
                function() {
                    indBan = $(this).index();
                    ulBanner.animate({
                        marginLeft: -indBan*liWidthBan
                    }, 700);
                    ulBanner.find('li').siblings().removeClass('active');
                    ulBanner.find('li').eq(indBan).addClass('active');
                    controlsBan.find('li').siblings().removeClass('active');
                    controlsBan.find('li').eq(indBan).addClass('active');
                }
            // )
            );
            
        });   
    }

    new SuperSlider({
        wrapper: $('.beauty-slider .beauty-sl-wr')
    });
}