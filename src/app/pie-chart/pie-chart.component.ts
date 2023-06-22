import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
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
        plotShadow: false,
        type: 'pie',
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
        text: 'Pie chart',
      },
      tooltip: {
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black',
            },
          },
          showInLegend: true,
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Browser share',
          data: [
            ['Export', 120],
            ['Booster', 90],
            {
              name: 'Power Gen',
              y: 30,
              sliced: true,
              selected: true,
            },
          ],
        },
      ],
    };
  }
}
