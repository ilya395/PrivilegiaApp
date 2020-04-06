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
                <div class="hod-s-sl-over">
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
    render()
    //

    function onManagement() {
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
    }

    function render() {
        function block(object) {
            let html = `
            <li>
                <img data-img-src="${object.thumbnailUrl}" src="${object.thumbnailUrl}">
                <a href="${object.url}" class="mask">
                    <div class="date">${object.date}</div>
                    <p>${object.title}</p>
                </a>
            </li>            
            `
            return html
        }
        let url = 'https://jsonplaceholder.typicode.com/users'
        let parent = document.querySelector('.hod-s-sl-wrapper .hod-s-sl-over')
        if (window.matchMedia('(max-width: 501px)').matches) {
            parent.classList.add('mobile')
        } else {
            parent.classList.add('desktop')
        }
        let wrap = parent.querySelector('.hod-s-sl')
        

        function draw(data, elem, param) {
            let array = []
            for (let i of data) {
                array.push(i)
            }
            let str =''
            // if (!param && param != 0) {
            //     for (let j = 0; j < param; j++) {
            //         str += block(array[j])
            //     }
            // } else {
            //     for (let j of array) {
            //         str += block(j)
            //     }
            // }

            if (window.matchMedia('(max-width: 501px)').matches) {
                str = block(data[0])
            } else {
                for (let j of array) {
                    str += block(j)
                }                
            }
            elem.innerHTML = str
        }

        fetch(url)
            .then(response => response.json())
            .then(json => {
                draw(json, wrap)
            })
            .then(() => {
                onManagement()
            })
        
    }
}
