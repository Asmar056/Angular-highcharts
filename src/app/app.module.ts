import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [AppComponent, ColumnChartComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
