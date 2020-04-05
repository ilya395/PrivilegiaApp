export const tpl = {
    content: footerTemplate,
    func: handler
}

function footerTemplate() {
    const html = `
    <section class="hod-str inner-block">
        <div class="container">
            <h1>Ход строительства</h1>
            <div class="scale-wr">
                <div class="top">
                    <div class="title">Начало строительства<br>4 квартал 2018</div>
                    <div class="title">Окончание строительства<br>4 квартал 2021</div>
                </div>
                <div class="scale-wh">
                    <div class="scale-act"><span>40%</span></div>
                </div>
            </div>
            <div class="hod-s-sl-wrapper">
                <div class="hod-s-sl-over desktop">
                    <ul class="hod-s-sl">
                        <li>
                            <img data-img-src="[[+image_absolute]]" src="">
                            <a href="#" class="mask">
                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>
                                <p>[[+pagetitle]]</p>
                            </a>
                        </li>
                        <li>
                            <img data-img-src="[[+image_absolute]]" src="">
                            <a href="#" class="mask">
                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>
                                <p>[[+pagetitle]]</p>
                            </a>
                        </li>
                        <li>
                            <img data-img-src="[[+image_absolute]]" src="">
                            <a href="#" class="mask">
                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>
                                <p>[[+pagetitle]]</p>
                            </a>
                        </li>
                        <li>
                            <img data-img-src="[[+image_absolute]]" src="">
                            <a href="#" class="mask">
                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>
                                <p>[[+pagetitle]]</p>
                            </a>
                        </li>
                        <li>
                            <img data-img-src="[[+image_absolute]]" src="">
                            <a href="#" class="mask">
                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>
                                <p>[[+pagetitle]]</p>
                            </a>
                        </li>
                        <li>
                            <img data-img-src="[[+image_absolute]]" src="">
                            <a href="#" class="mask">
                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>
                                <p>[[+pagetitle]]</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="hod-s-sl-over mobile">
                    <ul class="hod-s-sl">
                        <li>
                            <img data-img-src="[[+image_absolute]]" src="">
                            <a href="#" class="mask">
                                <div class="date">[[+publishedon:strtotime:dateRU]]</div>
                                <p>[[+pagetitle]]</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="arrow left desktop"><img src="temps/img/arrow-l.png"></div>
                <div class="arrow right desktop"><img src="temps/img/arrow-r.png"></div>
            </div>
        </div>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('.hod-str')
    wrap.classList.add('visible')
    //
    // window.addEventListener('load', function(){
    function SuperSlider1(params) {
        console.log('SuperSlider1 start!');
        var ulBanner = params.uls;
        var leftBan = params.lefts;
        var rightBan = params.rights;
        var liWidthBan, countBan, iBan, indBan, marginBan;
        
        countBan = ulBanner.find('li').length;
        
        liWidthBan = parseInt(ulBanner.find('li').css('width')) + parseInt(ulBanner.find('li').css('margin-right'));
        
        if(countBan <= 4) {
            leftBan.css('display', 'none');
            rightBan.css('display', 'none');
        } else {
            ulBanner.find('li:first-child').addClass('active');
        }
        
        rightBan.click(
            // $.debounce(200, 
            function() {
            indBan = ulBanner.find('.active').index();
            if(indBan == (countBan-5)) {
                ulBanner.animate({
                    marginLeft: 0
                }, 700);
                ulBanner.find('li').siblings().removeClass('active');
                ulBanner.find('li').eq(0).addClass('active');
            } else {
                marginBan = parseInt(ulBanner.css('margin-left'));
                ulBanner.animate({
                    marginLeft: marginBan-liWidthBan
                }, 700);
                ulBanner.find('li').siblings().removeClass('active');
                ulBanner.find('li').eq(indBan+1).addClass('active');
            }
        }
        // )
        );
        
        leftBan.click(
            // $.debounce(200, 
            function() {
            indBan = ulBanner.find('.active').index();
            if(indBan === 0) {
                ulBanner.animate({
                    marginLeft: -liWidthBan*(countBan-5)
                }, 700);
                ulBanner.find('li').siblings().removeClass('active');
                ulBanner.find('li').eq(countBan-5).addClass('active');
            } else {
                marginBan = parseInt(ulBanner.css('margin-left'));
                ulBanner.animate({
                    marginLeft: marginBan+liWidthBan
                }, 700);
                ulBanner.find('li').siblings().removeClass('active');
                ulBanner.find('li').eq(indBan-1).addClass('active');
            }
        }
        // )
        );
    }

    new SuperSlider1({
        uls: $('.hod-s-sl-wrapper .hod-s-sl'), 
        lefts: $('.hod-s-sl-wrapper .left'),
        rights: $('.hod-s-sl-wrapper .right')
    });
    // })
}
