export const tpl = {
    content: advantagesTemplate,
    func: handler
}

function advantagesTemplate() {
    const html = `
    <div id="top"></div>
    <div class="inner-block">
        <div id="pay-slider-wrapper">
            <div class="top-block">
                <div class="container">
                    <div class="pay-sl-top-wr">
                        <div class="pay-sl-top-over">
                            <ul class="pay-sl-top list-sl">
                                <li class="active"><div class="headtitle">Ипотека от 8,7%</div></li>
                                <li><div class="headtitle">«Привилегия» для семьи</div></li>
                                <li><div class="headtitle">Гибкая система рассрочки и&nbsp;отсрочка от застройщика</div></li>
                                <li><div class="headtitle">Оплата материнским капиталом</div></li>
                            </ul>
                        </div>
                        <div class="arrow left">&#8592;</div>
                        <div class="arrow right">&#8594;</div>
                        <ul class="controls"></ul>
                    </div>
                </div>
            </div>
            <div class="main-block">
                <div class="container">
                    <div class="pay-content-wr">
                        <div class="pay-content-over">
                            <ul class="pay-content-sl">
                                <li>
                                    <p><strong>
                                        В жилом комплексе «Привилегия» квартиру можно приобрести, даже если на руках нет всей суммы!
                                    </strong></p>
                                    <p>
                                        Оформите ипотеку прямо в офисе продаж.<br>Наши менеджеры:
                                    </p>
                                    <ul>
                                        <li>
                                            подберут наиболее выгодную для вас кредитную программу,
                                        </li>
                                        <li>
                                            помогут сформировать пакет документов, необходимый для получения кредита,
                                        </li>
                                        <li>
                                            отправят заявку банкам-партнерам.
                                        </li>
                                    </ul>
                                    <p>
                                        Приобретайте квартиру, воспользовавшись ипотекой, которую предоставляют наши банки-партнеры:
                                    </p>
                                    <div>
                                        <div class="ipoteka-wrapper">
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/img/ipoteka/otkrytie.png" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>7,85</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="https://www.open.ru/ipoteka" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/pics/ipoteka/PSB_logo_original_png.png" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>7,99</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="https://www.psbank.ru/Personal/Ambitions/Mortgage" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/pics/ipoteka/gazprombank.png" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>8,4</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="https://www.gazprombank.ru/personal/take_credit/mortgage/" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/img/ipoteka/dom_bank_black.jpg" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>8,7</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="https://domrfbank.ru/mortgage/" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/img/ipoteka/abb.jpg" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>8,8</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="https://www.akbars.ru/product/individuals/hypothec/" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/img/ipoteka/logo-sovkombank.jpg" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>9,19</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="https://sovcombank.ru/apply/ipoteka-2-documents/" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/pics/ipoteka/absolyut-bank.jpg" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>9,74</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="https://absolutbank.ru/personal/loans/mortgage/" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/pics/ipoteka/rosbank.png" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>9,74</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="https://www.rosbank.ru/ipoteka/" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/pics/ipoteka/rosselhoz.jpg" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>9,85</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="https://www.rshb.ru/natural/loans/mortgage/" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipot-card">
                                                <div class="image">
                                                    <img src="temps/img/ipoteka/investtorg.jpg" alt="">
                                                </div>
                                                <div class="cl1">
                                                    Ставка по ипотеке
                                                </div>
                                                <div class="cl2">
                                                    от <span>10,95</span> %
                                                </div>
                                                <div class="cl1">
                                                    <a href="http://www.itb.ru/personal/loans/mortgage/" target="_blank">Сайт банка</a>
                                                </div>
                                            </div>
                                            <div class="ipcons-item">
                                                <div class="title">
                                                    Хотите легко получить одобрение по&nbsp;ипотеке?
                                                </div>
                                                <div class="ipcons-btn-wr ipoteka-open">
                                                    <div class="ipcons-btn">
                                                        Консультация
                                                    </div>
                                                    <div class="shadow"></div>
                                                </div>
                                                <div class="subtitle">
                                                    Это бесплатно
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <p>
                                        *Внимание! Возможно изменение процентной ставки. Актуальную на сегодняшний день ставку уточняйте в офисе продаж.
                                    </p>
                                </li>
                                <li>
                                    <p class="ltr">
                                        <strong>
                                            Квартиры в ЖК «Привилегия» на выгодных условиях!
                                        </strong>
                                    </p>
                                    <p class="ltr">
                                        <span>
                                            Ипотека от Промсвязьбанка со льготной ставкой <strong>от 4,65%</strong>
                                        </span>
                                    </p>
                                    <p class="ltr">
                                        <span>
                                            Предложение действительно для семей, у которых родился второй или третий ребенок с 1 января 2019 года.
                                        </span>
                                    </p>
                                    <p class="ltr">
                                        <span>
                                            Размер первоначального взноса — 20% от стоимости жилья. 
                                        </span>
                                    </p>
                                    <div class="pay-form-block-wr">
                                        <div class="pfb-title">
                                            Получить подробную консультацию <br class="desktop">по данному предложению
                                        </div>
                                        <p>
                                            вы можете по телефону <strong>+7 (843) 207-25-51</strong>
                                        </p>
                                        <div class="consult-btn-wr">
                                            <div class="consult-btn ipoteka-open">
                                                Консультация
                                            </div>
                                            <div class="shadow"></div>
                                        </div>
                                    </div>                                    
                                    <p class="ltr">
                                        <span>Больше информации вы можете получить по телефону <span><strong>+7 (843) 207-25-51</strong></span>.</span>
                                    </p>
                                    <p class="ltr">
                                        <span>
                                            Хотите лично пообщаться с менеджером? Приезжайте в офис продаж по адресу: <strong>ул. Братьев Касимовых, 40В</strong>.
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p class="ltr">
                                        Воспользуйтесь новой программой рассрочки на выгодных условиях: до 6 месяцев без переплат, далее — под гибкий процент.
                                    </p>
                                    <p class="ltr">
                                        Кроме того, застройщик предоставляет отсрочку сроком от 1 до 4 месяцев в зависимости от первоначального взноса.
                                    </p>
                                    <div class="pay-form-block-wr">
                                        <div class="pfb-title">
                                            Получить подробную консультацию <br class="desktop"> по данному предложению
                                        </div>
                                        <p>
                                            вы можете по телефону <strong>+7 (843) 207-25-51</strong>
                                        </p>
                                        <div class="consult-btn-wr">
                                            <div class="consult-btn ipoteka-open">
                                                Консультация
                                            </div>
                                            <div class="shadow"></div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            В «Привилегии» можно приобрести квартиру, воспользовавшись материнским капиталом. Покупка квартиры с его помощью может быть осуществлена несколькими способами:
                                        </strong>
                                    </p>
                                    <ul>
                                        <li>
                                            его можно добавить к собственным сбережениям для покупки квартиры,
                                        </li>
                                        <li>
                                            использовать в качестве первоначального взноса по ипотеке,
                                        </li>
                                        <li>
                                            направить на досрочное погашение кредита.
                                        </li>
                                    </ul>
                                    <div>
                                        <div class="pay-form-block-wr">
                                            <div class="pfb-title">
                                                Получить подробную консультацию <br class="desktop"> по данному предложению
                                            </div>
                                            <p>
                                                вы можете по телефону <strong>+7 (843) 207-25-51</strong>
                                            </p>
                                            <div class="consult-btn-wr">
                                                <div class="consult-btn ipoteka-open">
                                                    Консультация
                                                </div>
                                                <div class="shadow"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-block">
                <div class="container">
                    <div class="subtitle">Другие способы оплаты:</div>
                    <ul class="controls-links">
                        <li class="scrollToEl" data-dest="#top">Ипотека от 8,7% &#8594;</li>
                        <li class="scrollToEl" data-dest="#top">«Привилегия» для семьи &#8594;</li>
                        <li class="scrollToEl" data-dest="#top">Гибкая система рассрочки и&nbsp;отсрочка от застройщика &#8594;</li>
                        <li class="scrollToEl" data-dest="#top">Оплата материнским капиталом &#8594;</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('#pay-page')
    wrap.classList.add('visible')
    //

    $(".scrollToEl").click(function() {
        var elementClick = $(this).attr("data-dest");
        console.log(elementClick);
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });

    function SuperSliderPay(params) {
    
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
                $.debounce(400, 
                    function() {
                        indBan = ulBanner.find('.active').index();
                        if(indBan == (countBan-1)) {
                            ulBanner.animate({
                                marginLeft: 0
                            }, 700);
                            $('#pay-slider-wrapper .pay-content-sl').animate({
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
                            $('#pay-slider-wrapper .pay-content-sl').animate({
                                marginLeft: marginBan-liWidthBan
                            }, 700);
                            ulBanner.find('li').siblings().removeClass('active');
                            ulBanner.find('li').eq(indBan+1).addClass('active');
                            controlsBan.find('li').siblings().removeClass('active');
                            controlsBan.find('li').eq(indBan+1).addClass('active');
                        }
                    }
                )
            );
            
            leftBan.click(
                $.debounce(400, 
                    function() {
                        indBan = ulBanner.find('.active').index();
                        if(indBan === 0) {
                            ulBanner.animate({
                                marginLeft: -liWidthBan*(countBan-1)
                            }, 700);
                            $('#pay-slider-wrapper .pay-content-sl').animate({
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
                            $('#pay-slider-wrapper .pay-content-sl').animate({
                                marginLeft: marginBan+liWidthBan
                            }, 700);
                            ulBanner.find('li').siblings().removeClass('active');
                            ulBanner.find('li').eq(indBan-1).addClass('active');
                            controlsBan.find('li').siblings().removeClass('active');
                            controlsBan.find('li').eq(indBan-1).addClass('active');
                        }
                    }
                )
            );
            
            controlsBan.find('li').click(
                $.debounce(200, 
                    function() {
                        indBan = $(this).index();
                        ulBanner.animate({
                            marginLeft: -indBan*liWidthBan
                        }, 700);
                        $('#pay-slider-wrapper .pay-content-sl').animate({
                            marginLeft: -indBan*liWidthBan
                        }, 700);
                        ulBanner.find('li').siblings().removeClass('active');
                        ulBanner.find('li').eq(indBan).addClass('active');
                        controlsBan.find('li').siblings().removeClass('active');
                        controlsBan.find('li').eq(indBan).addClass('active');
                    }
                )
            );
            
            $('#pay-slider-wrapper .controls-links').find('li').click(
                $.debounce(200, 
                    function() {
                        indBan = $(this).index();
                        ulBanner.animate({
                            marginLeft: -indBan*liWidthBan
                        }, 700);
                        $('#pay-slider-wrapper .pay-content-sl').animate({
                            marginLeft: -indBan*liWidthBan
                        }, 700);
                        ulBanner.find('li').siblings().removeClass('active');
                        ulBanner.find('li').eq(indBan).addClass('active');
                        controlsBan.find('li').siblings().removeClass('active');
                        controlsBan.find('li').eq(indBan).addClass('active');
                    }
                )
            ); 
        });  
    };

    new SuperSliderPay({
        wrapper: $('.pay-sl-top-wr')
    });

    //

    callToModal();

    function callToModal() {
        let allBtn = document.querySelectorAll('.ipoteka-open')
        function paysHandler() {
            console.log(this)

            if (!document.querySelector('.overlay .modal.ipoteka-modal')) {
                const parent = document.querySelector('.overlay')
                import('../otherModules/ipotekaModal')
                    .then((obj) => {
                        parent.insertAdjacentHTML('afterbegin', obj.tpl.content())
                        return obj
                    }) 
                    .then((obj) => {
                        insertTitle()
                        obj.tpl.func() // включим внурениий функционал модуля
                    })             
            }
        } 
        allBtn.forEach((i) => {
            i.addEventListener('click', paysHandler)
        })
    }

    function insertTitle() {
        let flag = 'Хочет получить одобрение по ипотеке'
        let list = document.querySelectorAll('.pay-sl-top-wr .controls li')
        let index = 0
        for (let i = 0; i < list.length; i++) {
            if (list[i].classList.contains('active')) {
                index = i
            }
        }
        switch (index) {
            case 1:
                flag = 'Вызвана форма со старницы \"\«Привилегия\» для семьи\"'
                //
                break;
            case 2:
                flag = 'Вызвана форма со старницы \"Гибкая система рассрочки и отсрочка от застройщика\"'
                //
                break;
            case 3:
                flag = 'Оплата материнским капиталом'
                //
                break;
            default:
                flag = 'Вызвана форма со старницы \"Ипотека от 8,7%\"'
        }
        document.querySelector('.modal.ipoteka-modal input[type="hidden"]').value = flag
    }
}