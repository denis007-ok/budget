    // Add data

data = [
    {
        "country": "62",
        "name": 'Муниципальная программа "Развитие муниципальной службы администрации муниципального образования Октябрьский район Оренбургской области"',
        "color": am4core.color("#FE2371"),
        "2024": 25,
        "2025": 903.1
    }, {
        "country": "63",
        "name": 'Муниципальная программа "Экономическое развитие муниципального образования Октябрьский район Оренбургской области"',
        "color": am4core.color("#544FC5"),
        "2024": 4218.2,
        "2025": 47308.6
    }, {
        "country": "64",
        "name": 'Муниципальная программа "Комплексные меры по противодействию злоупотреблению наркотиками и их незаконному обороту и обеспечению правопорядка на территории муниципального образования Октябрьский район Оренбургской области"',
        "color": am4core.color("#2CAFFE"),
        "2024": 15,
        "2025": 65966
    }, {
        "country": "65",
        "name": 'Национальная экономика',
        "color": am4core.color("#FE6A35"),
        "2024": 0,
        "2025": 28867.6
    }, {
        "country": "66",
        "name": 'Муниципальная программа "Обеспечение медицинскими кадрами лечебно-профилактических учреждений муниципального образования Октябрьский район Оренбургской области "',
        "color": am4core.color("#6B8ABC"),
        "2024": 100,
        "2025": 1687.1
    }, {
        "country": "67",
        "name": 'Муниципальная программа «Развитие культуры муниципального образования Октябрьский район Оренбургской области»',
        "color": am4core.color("#1C74BD"),
        "2024": 77437.3,
        "2025": 469666.5
    }, {
        "country": "68",
        "name": 'Муниципальная программа "Развитие молодежной политики, физической культуры, спорта и туризма в муниципальном образовании Октябрьский район Оренбургской области"',
        "color": am4core.color("#00A6A6"),
        "2024": 28781.3,
        "2025": 30257.7
    }, {
        "country": "69",
        "name": 'Муниципальная программа «Стимулирование развития жилищного строительства в муниципальном образовании Октябрьский район Оренбургской области»',
        "color": am4core.color("#D568FB"),
        "2024": 28567.6,
        "2025": 77437.3
    }, {
        "country": "70",
        "name": 'Муниципальная программа "Развитие системы образования  муниципального образования Октябрьский район Оренбургской области"',
        "color": am4core.color("#D568FB"),
        "2024": 471137.9,
        "2025": 77437.3
    }, {
        "country": "71",
        "name": 'Муниципальная программа «О комплексных мерах по профилактике терроризма и экстремизма на территории муниципального образования Октябрьский район Оренбургской области »',
        "color": am4core.color("#D568FB"),
        "2024": 15,
        "2025": 77437.3
    }, {
        "country": "72",
        "name": 'Муниципальная программа «Управление муниципальными финансами муниципального образования Октябрьский район Оренбургской области» ',
        "color": am4core.color("#D568FB"),
        "2024": 60988.5,
        "2025": 77437.3
    }, {
        "country": "73",
        "name": 'Муниципальная программа «Обеспечение деятельности Администрации муниципального образования Октябрьский район Оренбургской области»',
        "color": am4core.color("#D568FB"),
        "2024": 40917.6,
        "2025": 77437.3
    }, {
        "country": "74",
        "name": 'Муниципальная программа «Оказание поддержки социально ориентированным общественным организациям и отдельным категориям  граждан муниципального образования Октябрьский район Оренбургской области»',
        "color": am4core.color("#D568FB"),
        "2024": 5027.5,
        "2025": 77437.3
    }, {
        "country": "75",
        "name": 'Муниципальная программа «Развитие сельского хозяйства и регулирование рынков сельскохозяйственной продукции, сырья и продовольствия муниципального образования Октябрьский район Оренбургской области»',
        "color": am4core.color("#D568FB"),
        "2024": 4858.0,
        "2025": 77437.3
    }, {
        "country": "76",
        "name": 'Муниципальная программа «Повышение безопасности дорожного движения в муниципальном образовании Октябрьский район Оренбургской области»',
        "color": am4core.color("#D568FB"),
        "2024": 5,
        "2025": 77437.3
    }, {
        "country": "78",
        "name": 'Непрограммные мероприятия',
        "color": am4core.color("#D568FB"),
        "2024": 0,
        "2025": 77437.3
    }];

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart-r2", am4charts.XYChart);
chart.language.locale = am4lang_ru_RU;

// Add percent sign to all numbers
/*chart.numberFormatter.numberFormat = "#.#'%'";*/
chart.data = data;

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.fontSize = 11;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 480000;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 30;
valueAxis.fontSize = 11;

// axis break
var axisBreak = valueAxis.axisBreaks.create();
axisBreak.startValue = 80000;
axisBreak.endValue = 465000;
axisBreak.breakSize = 0.005;

// make break expand on hover
var hoverState = axisBreak.states.create("hover");
hoverState.properties.breakSize = 1;
hoverState.properties.opacity = 0.1;
hoverState.transitionDuration = 1500;

axisBreak.defaultState.transitionDuration = 1000;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "2024";
series.dataFields.grbs = "name";
series.columns.template.tooltipText = "{grbs} (2024): \n[bold]{valueY} тыс.руб.[/]";
series.columns.template.tooltipY = 0;
series.columns.template.strokeOpacity = 0;
series.startDuration = 1000;
series.tooltip.label.wrap = true;

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

series.columns.template.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });