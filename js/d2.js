am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chart-d2", am4charts.XYChart);
chart.language.locale = am4lang_ru_RU;
chart.padding(0, 0, 0, 0);

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "network";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.fontSize = 11;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.fontSize = 11;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "network";
series.dataFields.valueX = "MAU";
series.tooltipText = "{valueX.value}"
series.columns.template.strokeOpacity = 0;
series.columns.template.column.cornerRadiusBottomRight = 5;
series.columns.template.column.cornerRadiusTopRight = 5;

var labelBullet = series.bullets.push(new am4charts.LabelBullet())
labelBullet.label.horizontalCenter = "left";
labelBullet.label.dx = 10;
labelBullet.label.dy = 3;
labelBullet.label.text = "{values.valueX.workingValue}";//"{values.valueX.workingValue.formatNumber('#.0as')}";
labelBullet.locationX = 1;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target){
  return chart.colors.getIndex(target.dataItem.index);
});

chart.data = [
    {
      "network": "Январь",
      "MAU": 14236.63
    },
    {
      "network": "Февраль",
      "MAU": 17204.39
    },
    {
      "network": "Март",
      "MAU": 8623.78
    },
    {
      "network": "Апрель",
      "MAU": 15717.18
    },
    {
      "network": "Май",
      "MAU": 29417.65
    },
    {
      "network": "Июнь",
      "MAU": 24116.64
    },
    {
      "network": "Июль",
      "MAU": 28443.44
    },
    {
      "network": "Август",
      "MAU": 17486.65
    },
    {
      "network": "Сентябрь",
      "MAU": 18538.71
    },
    {
      "network": "Октябрь",
      "MAU": 26417.94
    },
    {
      "network": "Ноябрь",
      "MAU": 18121.14
    },
    {
      "network": "Декабрь",
      "MAU": 31771.40
    }
  ]