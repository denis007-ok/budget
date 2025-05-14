var data = {
    "set1":[
      {
        country: "010",
        visits: 1203.88,
        names: "Совет депутатов"
      },
      {
        country: "011",
        visits: 66001.59,
        names: "Администрация"
      },
      {
        country: "012",
        visits: 71136.65,
        names: "Управление по финансам"
      },
      {
        country: "041",
        visits: 47421.73,
        names: "Отдел архитектуры"
      },
      {
        country: "051",
        visits: 1687.10,
        names: "Счетная палата"
      },
      {
        country: "073",
        visits: 520261.85,
        names: "Управление образования"
      },
      {
        country: "075",
        visits: 25857.26,
        names: "Отдел молодежной политики и спорта"
      },
      {
        country: "084",
        visits: 81311.81,
        names: "Управление культуры"
      },
  ]};
  
  
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end
      
      var chart = am4core.create("chart-r", am4charts.XYChart);
      //chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.language.locale = am4lang_ru_RU;
      
  
    chart.data = data.set1;
      
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.minGridDistance = 40;
      categoryAxis.fontSize = 11;
      
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.max = 530000;
      valueAxis.strictMinMax = true;
      valueAxis.renderer.minGridDistance = 30;
      valueAxis.fontSize = 11;
      
      // axis break
      var axisBreak = valueAxis.axisBreaks.create();
      axisBreak.startValue = 82000;
      axisBreak.endValue = 515000;
      axisBreak.breakSize = 0.005;
      
      // make break expand on hover
      var hoverState = axisBreak.states.create("hover");
      hoverState.properties.breakSize = 1;
      hoverState.properties.opacity = 0.1;
      hoverState.transitionDuration = 1500;
      
      axisBreak.defaultState.transitionDuration = 1000;
      
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "country";
      series.dataFields.valueY = "visits";
      series.dataFields.names = "names";
      series.columns.template.tooltipText = "{names} - [bold]{valueY.value} тыс.руб.[/]";
      series.columns.template.tooltipY = 0;
      series.columns.template.strokeOpacity = 0;
      series.startDuration = 1000;
      
      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });
  