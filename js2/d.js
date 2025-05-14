

	// Themes begin
	am4core.useTheme(am4themes_animated);
	// Themes end
	
	/**
	 * Source data
	 */
	var data = [{
	  "category": "Налоговые",
	  "value": 230943,
	  "color": am4core.color("#dc4534"),
	  "breakdown": [{
		"category": "НДФЛ",
		"value": 195581
	  }, {
		"category": "Налог на \nсовокупный доход",
		"value": 37796
	  }]
	}, {
	  "category": "Неналоговые",
	  "value": 27683.6,
	  "color": am4core.color("#d7a700"),
	  "breakdown": [{
		"category": "Государственная пошлина",
		"value": 4986
	  }, {
		"category": "Доход от использования \nимущества",
		"value": 6161.4
	  }, {
		"category": "Плата за негативное \nвоздействие на окружающую среду",
		"value": 85.2
	  }, {
		"category": "Доходы от продажи материальных \nи нематериальных активов",
		"value": 16000
	  }, {
		"category": "Штрафы санкции \nвозмещение ущерба",
		"value": 451
	  }]
	}, {
	  "category": "Безвозмездные \nпоступления",
	  "value": 688887.5,
	  "color": am4core.color("#68ad5c"),
	  "breakdown": [{
		"category": "Дотации",
		"value": 121314.0
	  }, {
		"category": "Субсидии",
		"value": 131326.3
	  }, {
		"category": "Субвенции",
		"value": 366751.8
	  }, {
		"category": "Иные межбюджетные \nтрансферты",
		"value": 69495.4
	  }]
	}];

	/**
	 * Chart container
	 */
	
	// Create chart instance
	var chart = am4core.create("chart-d", am4core.Container);
	chart.width = am4core.percent(100);
	chart.height = am4core.percent(100);
	chart.layout = "horizontal";
	chart.language.locale = am4lang_ru_RU;
	chart.paddingTop = 0;
		chart.paddingBottom = 0;
		chart.paddingLeft = 0;
		chart.paddingRight = 0;
	/**
	 * Column chart
	 */
	
	// Create chart instance
	var columnChart = chart.createChild(am4charts.XYChart);
	columnChart.paddingTop = 0;
	columnChart.paddingBottom = 0;
	columnChart.paddingLeft = 0;
	columnChart.paddingRight = 0;
	// Create axes
	var categoryAxis = columnChart.yAxes.push(new am4charts.CategoryAxis());
	categoryAxis.dataFields.category = "category";
	categoryAxis.renderer.grid.template.location = 0;
	categoryAxis.renderer.inversed = true;
	categoryAxis.fontSize = 11;
	
	var valueAxis = columnChart.xAxes.push(new am4charts.ValueAxis());
	valueAxis.renderer.minGridDistance = 60;
	valueAxis.fontSize = 11;
	
	// Create series
	var columnSeries = columnChart.series.push(new am4charts.ColumnSeries());
	columnSeries.dataFields.valueX = "value";
	columnSeries.dataFields.categoryY = "category";
	columnSeries.columns.template.strokeWidth = 0;
	columnSeries.columns.template.tooltipText = "{category} - [bold]{valueX.value} тыс.руб.[/]";
	
	var labelBullet = columnSeries.bullets.push(new am4charts.LabelBullet())
	labelBullet.label.horizontalCenter = "left";
	labelBullet.interactionsEnabled = true
    labelBullet.dy = 10;
    labelBullet.label.text = '{valueX.value.workingValue}'
    labelBullet.label.fill = am4core.color('#000')
	/**
	 * Pie chart
	 */
	
	// Create chart instance
	var pieChart = chart.createChild(am4charts.PieChart);
	pieChart.data = data;
	pieChart.innerRadius = am4core.percent(50);
	pieChart.paddingTop = 0;
	pieChart.paddingBottom = 0;
	pieChart.paddingLeft = 0;
	pieChart.paddingRight = 0;
	// Add and configure Series
	var pieSeries = pieChart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = "value";
	pieSeries.dataFields.category = "category";
	pieSeries.slices.template.propertyFields.fill = "color";
	pieSeries.labels.template.disabled = true;
	
	// Set up labels
	var label1 = pieChart.seriesContainer.createChild(am4core.Label);
	label1.text = "";
	label1.horizontalCenter = "middle";
	label1.fontSize = 35;
	label1.fontWeight = 600;
	label1.dy = -30;
	
	var label2 = pieChart.seriesContainer.createChild(am4core.Label);
	label2.text = "";
	label2.horizontalCenter = "middle";
	label2.fontSize = 12;
	label2.dy = 20;
	
	// Auto-select first slice on load
	pieChart.events.on("ready", function(ev) {
	  pieSeries.slices.getIndex(0).isActive = true;
	});
	
	// Set up toggling events
	pieSeries.slices.template.events.on("toggled", function(ev) {
	  if (ev.target.isActive) {
		
		// Untoggle other slices
		pieSeries.slices.each(function(slice) {
		  if (slice != ev.target) {
			slice.isActive = false;
		  }
		});
		
		// Update column chart
		columnSeries.appeared = false;
		columnChart.data = ev.target.dataItem.dataContext.breakdown;
		columnSeries.fill = ev.target.fill;
		columnSeries.reinit();
		
		// Update labels
		label1.text = pieChart.numberFormatter.format(ev.target.dataItem.values.value.percent, "#.'%'");
		label1.fill = ev.target.fill;
		
		label2.text = ev.target.dataItem.category;
	  }
	});
	
	
 // end am4core.ready()