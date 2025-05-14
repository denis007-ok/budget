var reg24=[
    {
        "region_name": "Белозёрский сельсовет",
        "region_code": "bel",
        "population": "Не планирует принимать участие",
		"region_sours": "0",
		"region_text": ""
    },
    {
        "region_name": "Булановский сельсовет",
        "region_code": "bul",
        "population": "Не планирует принимать участие",
		"region_sours": "0",
		"region_text": "",
    },
    {
        "region_name": "Васильевский сельсовет",
        "region_code": "vas",
        "population": 923042.80,
		"region_sours": "Капитальны ремонт кровли помещения Васильевского сельского Дома культуры",
		"region_text": "",
        "sum_obl": 620969.52,
        "sum_m": 302073.28,
        "sum_szm": 162266.43,
        "sum_ip": 139806.85,
        "be": "pic/vas125.jpeg",
        "af": "pic/vas225.jpeg",
    },
    {
        "region_name": "Ильинский сельсовет",
        "region_code": "il",
        "population": "Не планирует принимать участие",
        "project_name": "Ремонт дороги",
		"region_sours": "0",
		"region_text": "",
    },
    {
        "region_name": "Имангуловский сельсовет",
        "region_code": "im",
        "population": "Не планирует принимать участие",
		"region_sours": "0",
		"region_text": "",
    },
    {
        "region_name": "Комиссаровский сельсовет",
        "region_code": "kom",
        "population": 1050067.42,
		"region_sours": "Ограждение кладбища с.Комиссарово Октябрьского района Оренбургской области по адресу: улица Центральная, улица Заречная",
		"region_text": "",
        "sum_obl": 727999.70,
        "sum_m": 322067.72,
        "sum_szm": 171267.78,
        "sum_ip": 150799.94,
        "be": "pic/kom125.jpg",
        "af": "pic/kom225.jpg",
    },
    {
        "region_name": "Краснооктябрьский сельсовет",
        "region_code": "kr",
        "population": 1996598.06,
		"region_sours": "Ремонт дорожного полотна улицы Набережная пос. Краснооктябрьский Октябрьского района Оренбургской области",
		"region_text": "",
        "sum_obl": 1399999.34,
        "sum_m": 596598.72,
        "sum_szm": 286598.87,
        "sum_ip": 309999.85,
        "be": "pic/kr125.jpg",
        "af": "pic/kr225.jpg",
    },
    {
        "region_name": "Марьевский сельсовет",
        "region_code": "mar",
        "population": 1109804.85,
		"region_sours": "Ограждение кладбища в с.Марьевка Октябрьского района Оренбургской области",
		"region_text": "Сельский совет не учавствовал",
        "sum_obl": 778929.34,
        "sum_m": 330875.51,
        "sum_szm": 172809.84,
        "sum_ip": 158065.66,
        "be": "pic/kr125.jpg",
        "af": "pic/kr225.jpg",
    },
    {
        "region_name": "Нижнегумбетовский сельсовет",
        "region_code": "ng",
        "population": 739000,
		"region_sours": "Ограждение кладбища, с.Кузьминовка, Октябрьского района, Оренбургской области",
		"region_text": "",
        "sum_obl": 510479.39,
        "sum_m": 330875.51,
        "sum_szm": 172809.84,
        "sum_ip": 158065.66,
        "be": "pic/ng125.jpg",
        "af": "pic/ng225.jpg",
    },
    {
        "region_name": "Новоникитинский сельсовет",
        "region_code": "nov",
        "population": "Не планирует принимать участие",
		"region_sours": "0",
		"region_text": "",
    },
    {
        "region_name": "Новотроицкий сельсовет",
        "region_code": "novot",
        "population": "Не планирует принимать участие",
		"region_sours": "0",
		"region_text": "",
    },
    {
        "region_name": "Октябрьский сельсовет",
        "region_code": "okt",
        "population": 2447501.00,
		"region_sours": "Ремонт  участка улично-дорожной сети по ул.Железнодорожной с.Октябрьское Октябрьского района Оренбургской области",
		"region_text": "",
        "sum_obl": 1500000.00,
        "sum_m": 947501.00,
        "sum_szm": 637501.00,
        "sum_ip": 310000.00,
        "be": "pic/okt125.jpg",
        "af": "pic/okt225.jpg",
    },
    {
        "region_name": "с.Октябрьское",
        "region_code": "okt2",
        "population": 1545155,
		"region_sours": "0",
		"region_text": ""
    },
    {
        "region_name": "Российский сельсовет",
        "region_code": "ros",
        "population": "Не планирует принимать участие",
		"region_sours": "0",
		"region_text": "",
    },
    {
        "region_name": "Уранбашский сельсовет",
        "region_code": "yr",
        "population": "Не планирует принимать участие",
		"region_sours": "0",
		"region_text": "",
    }
];

var regions = reg24;

$(function func() {

    for(i = 0; i < regions.length; i++) {
        $('#'+ regions[i].region_code)
        .data('region', regions[i]);
        if (regions[i].region_sours != '0') {
        $('#'+ regions[i].region_code)
        .css({'fill':'#0066ff', 'fill-opacity':'0.5'})
    }}

    $('.map g').mouseover(function (e) {
        var region_data=$(this).data('region');
		$('.list-win li[data-link-id=' + region_data.region_code +']').addClass('active');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
            'Сумма: ' + region_data.population.toLocaleString("ru-RU") +
            '</div>'
         )
        .appendTo('body');
        document.querySelector('.be').innerHTML = '<img src="' + region_data.be + '" style="object-fit: contain">';
        document.querySelector('.af').innerHTML = '<img src="' + region_data.af + '" style="object-fit: contain">';
    })
    .mouseleave(function () {
        $('.info_panel').remove();
		$('.list-win li').removeClass('active');
    })
    .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY-50,
            left: mouseX - ($('.info_panel').width()/2)
        });
    });

	$('.list-win li').mouseover(function (e) {
		var id = $(this).data().linkId;
		$('.imgSvg g[id=' + id +']').addClass('active');
        for(i = 0; i < regions.length; i++) {
            if (regions[i].region_code==id) {
                var region_data=regions[i];
            }   
           };
        document.querySelector('.be').innerHTML = '<img src="' + region_data.be + '" style="object-fit: contain">';
        document.querySelector('.af').innerHTML = '<img src="' + region_data.af + '" style="object-fit: contain">';
	}).mouseleave(function () {
        $('.info_panel').remove();
		$('.imgSvg g').removeClass('active');
    });

	$('.map g').click(function (e) {
        var region_data=$(this).data('region');
        if (region_data.region_sours != '0') {
    $('.overlay').addClass('is-open');
	document.querySelector('.modal-title').innerText = region_data.region_name;
	document.querySelector('.text2').innerText = region_data.region_text;
    document.querySelector('.td1').innerText = region_data.population + ' ₽';
    document.querySelector('.td2').innerText = region_data.sum_obl + ' ₽';
    document.querySelector('.td3').innerText = region_data.sum_szm + ' ₽';
    document.querySelector('.td4').innerText = region_data.sum_ip + ' ₽';
        fmap(region_data);
        document.querySelector('.text1').innerText = region_data.region_sours;
    }
	
    return false;
  });
 
   $('.list-win li').click(function (e) {
	   var id = $(this).data().linkId;
       for(i = 0; i < regions.length; i++) {
		if (regions[i].region_code==id) {
			var region_data=regions[i];
		}   
	   };
       if (region_data.region_sours != "0") {
    $('.overlay').addClass('is-open');
	document.querySelector('.modal-title').innerText = region_data.region_name;
	document.querySelector('.text1').innerText = region_data.region_sours;
	document.querySelector('.text2').innerText = region_data.region_text;
    document.querySelector('.td1').innerText = region_data.population + ' ₽';
    document.querySelector('.td2').innerText = region_data.sum_obl + ' ₽';
    document.querySelector('.td3').innerText = region_data.sum_szm + ' ₽';
    document.querySelector('.td4').innerText = region_data.sum_ip + ' ₽';
    
        fmap(region_data);
        document.querySelector('.text1').innerText = region_data.region_sours;
    };
	
    return false;
  });


});

$(function () {
  $('.close-btn').click(function () {
    $('.overlay').removeClass('is-open');
  });
});

function fmap(region_data) {
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart-i", am4charts.PieChart);
chart.language.locale = am4lang_ru_RU;
// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);



// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "value";
pieSeries.dataFields.category = "category";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.innerRadius = 10;
pieSeries.slices.template.fillOpacity = 0.5;

pieSeries.slices.template.propertyFields.disabled = "labelDisabled";
pieSeries.labels.template.propertyFields.disabled = "labelDisabled";
pieSeries.ticks.template.propertyFields.disabled = "labelDisabled";


// Add data
pieSeries.data = [{
  "category": "Местный бюджет",
  "value": region_data.sum_m
}, {
  "category": "Unused",
  "value": region_data.sum_obl,
  "labelDisabled":true
}];

// Disable sliding out of slices
pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 1;

// Add second series
var pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "value";
pieSeries2.dataFields.category = "category";
pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;
pieSeries2.slices.template.propertyFields.fill = "fill";

// Add data
pieSeries2.data = [{
  "category": "Средства местного бюджета",
  "value": region_data.sum_szm
}, {
  "category": "Инициативные платежи",
  "value": region_data.sum_ip
}, {
  "category": "Областной бюджет",
  "value": region_data.sum_obl,
  "fill":"#d6642f"
}];


pieSeries.adapter.add("innerRadius", function(innerRadius, target){
  return am4core.percent(40);
})

pieSeries2.adapter.add("innerRadius", function(innerRadius, target){
  return am4core.percent(60);
})

pieSeries.adapter.add("radius", function(innerRadius, target){
  return am4core.percent(100);
})

pieSeries2.adapter.add("radius", function(innerRadius, target){
  return am4core.percent(80);
})
}