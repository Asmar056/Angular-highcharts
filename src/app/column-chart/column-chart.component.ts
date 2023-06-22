import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css'],
})
export class ColumnChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {};
  chartSeries: any = [
    {
      name: 'Fuel Gas Use (GTs)',
      data: [385440, 0],
    },
    {
      name: 'Flared Gas',
      data: [0, 163670.49],
    },
    {
      name: 'Methane (Flared Gas)',
      data: [0, 65600],
    },
  ];

  ngOnInit(): void {
    this.loadChart();
  }
  loadChart() {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      colors: [
        '#3d98b7',
        '#33709c',
        '#878787',
        '#dbdbdb',
        '#9eccdb',
        '#2e80db',
        '#0949aa',
        '#6d6e71',
        '#8EA3A9',
        '#808080',
        '#387F96',
      ],

      title: {
        text: 'Column chart',
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -300,
        y: 150,
        floating: true,
        symbolRadius: 0,
      },
      xAxis: {
        width: 600,

        categories: ['Contributor 1', 'Contributor 2'],
        title: {
          text: 'Contributor',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Emission <br/> in <br/> tCO\u2082',
          align: 'middle',
          rotation: 360,
          margin: 20,
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: ' tCO2e',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        column: {
          stacking: 'normal',
        },
      },
      series: this.chartSeries,
    };
  }
}
