import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css'],
})
export class ColumnChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {};
  chartSeries: any = [
    {
      name: 'John',
      data: [5, 3, 4, 7, 2],
    },
    {
      name: 'Jane',
      data: [2, 2, 3, 2, 1],
    },
    {
      name: 'Joe',
      data: [3, 4, 4, 2, 5],
    },
  ];

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
        text: '',
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        // x: 10,
        // y: 50,
        floating: true,
        symbolRadius: 0,
      },
      xAxis: {
        width: 600,

        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
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
      series: this.chartSeries
    };
  }
}
