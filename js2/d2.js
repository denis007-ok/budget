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
      "MAU": 66988.8
    },
    {
      "network": "Февраль",
      "MAU": 72837.69
    },
    {
      "network": "Март",
      "MAU": 69033.54
    },
    {
      "network": "Апрель",
      "MAU": 72001.29
    },
    {
      "network": "Май",
      "MAU": 84507.01
    },
    {
      "network": "Июнь",
      "MAU": 66601.49
    },
    {
      "network": "Июль",
      "MAU": 74237.09
    },
    {
      "network": "Август",
      "MAU": 164339.79
    },
    {
      "network": "Сентябрь",
      "MAU": 72861.73
    },
    {
      "network": "Октябрь",
      "MAU": 80066.98
    },
    {
      "network": "Ноябрь",
      "MAU": 60442.89
    },
    {
      "network": "Декабрь",
      "MAU": 73154.78
    }
  ]