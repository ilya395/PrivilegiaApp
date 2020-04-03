// import { ymaps } from 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'

export const tpl = {
    content: footerTemplate,
    func: handler
}

function footerTemplate() {
    const html = `
    <section class="inner-block" id="map">
        <div class="legend">
            <h3>Контакты</h3>
            <p class="med">+7 (843) 207-23-58</p>
            <p class="af_contacts-btn link callback-open">Заказать звонок</p>
            <p>
                <strong>Место строительства:</strong>
                г.&nbsp;Казань,
                <br>
                ул. Братьев Касимовых, 40В
            </p>
            <p class="of_bottom_8"><strong>Офис продаж:</strong></p>
            <p>ул. Братьев Касимовых, 40В</p>
            <p>
                пн-пт 9:00-20:00
                <br>
                сб-вс 10:00-17:00
                <br>
                *Уточнить график работы и более подробную информацию о работе отделов продаж можно по телефону +7 (843) 207-23-58.
            </p>
            <p>По запросу время&nbsp;работы продлевается на&nbsp;час</p>
        </div>
    </section>
    `
    return html
}

function handler(){
    console.log('контент модуля активирован!')
    const wrap = document.querySelector('#map')
    wrap.classList.add('visible')

    ///////////////////////////////////////////


    ymaps.ready(init);

    var myMap,
    	myPlacemark;/*,
    	myPlacemark2*/
    
    function init(){     
    	myMap = new ymaps.Map("map", {
    		center: [55.760044, 49.184730],
    		zoom: 15,
    		type: 'yandex#publicMap'
    	});
    	
    	myMap.behaviors.disable('scrollZoom');
    	
    	myPlacemark = new ymaps.Placemark([55.757051, 49.197761], {}, {
            hintContent: 'Офис продаж ЖК "Привилегия"', 
    		balloonContent: 'Офис продаж ЖК "Привилегия"'
        });
        
        myPlacemark.options.set('preset', 'islands#orangeStretchyIcon');
        myPlacemark.properties.set('iconContent', 'Офис продаж');
        /*
        myPlacemark2 = new ymaps.Placemark([55.756108, 49.201752], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'temps/img/map_label.png',
            iconImageSize: [60, 85],
            iconImageOffset: [-25, -72],
            hintContent: 'Жилой комплекс "Привилегия"', 
    		balloonContent: 'Жилой комплекс "Привилегия"'
        });
        */
    	myMap.geoObjects.add(myPlacemark);
    	/*
    	myMap.geoObjects.add(myPlacemark2);
    	*/
    }
}
