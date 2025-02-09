import { Component, ViewEncapsulation } from '@angular/core';
import { Menu } from 'smart-webcomponents-angular';
import { StylingService } from 'src/app/services/styling.service';

@Component({
  selector: 'sm-overview2',
  templateUrl: './overview2.component.html',
  styleUrls: ['./overview2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Overview2Component {

  salesData = [
    { month: 'Jan', sales: 22330, orders: 19302 },
    { month: 'Feb', sales: 31323, orders: 18902 },
    { month: 'Mar', sales: 68200, orders: 95043 },
    { month: 'Apr', sales: 31889, orders: 10992 },
    { month: 'May', sales: 30056, orders: 9980 },
    { month: 'Jun', sales: 112024, orders: 13489 },
    { month: 'Jul', sales: 94995, orders: 19048 },
    { month: 'Aug', sales: 71045, orders: 12334 },
    { month: 'Sep', sales: 48012, orders: 11102 },
    { month: 'Oct', sales: 40045, orders: 11894 },
    { month: 'Nov', sales: 47542, orders: 50301 },
    { month: 'Dec', sales: 39012, orders: 70632 }
  ];

  weeklyData = [
    { market: 'Direct', revenue: 2873, value: 11 },
    { market: 'Partner', revenue: 7201, value: -9 },
    { market: 'Online', revenue: 1254, value: 27 },
    { market: 'Other', revenue: 901, value: 0.2 }
  ];

  salesComparisonData = [
    { month: 'Jan', current: 77, last: 98 },
    { month: 'Feb', current: 70, last: 89 },
    { month: 'Mar', current: 67, last: 79 },
    { month: 'Apr', current: 82, last: 81 },
    { month: 'May', current: 93, last: 99 },
    { month: 'Jun', current: 112, last: 122 },
    { month: 'Jul', current: 130, last: 129 },
    { month: 'Aug', current: 118, last: 125 },
    { month: 'Sep', current: 92, last: 99 },
    { month: 'Oct', current: 75, last: 83 },
    { month: 'Nov', current: 78, last: 90 },
    { month: 'Dec', current: 90, last: 112 }
  ];

  revenueChartData = {
    animation: 'none',
    theme: this.styling.getTheme(),
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    enableCrosshairs: false,
    padding: { left: 5, top: 0, right: 0, bottom: 40 },
    dataSource: this.salesData,
    xAxis: {
      dataField: 'month',
      displayText: 'Month',
      visible: true,
      gridLines: {
        visible: false
      }
    },
    colorScheme: 'scheme29',
    seriesGroups: [
      {
        type: 'splinearea',
        valueAxis: {
          labels: {
            horizontalAlignment: 'right',
            formatSettings: { decimalPlaces: 0 }
          },
          visible: true,
          gridLines: {
            visible: true
          }
        },
        series: [
          { dataField: 'sales', displayText: 'Sales ($)', symbolSize: 8 },
          { dataField: 'orders', displayText: 'Orders ($)', symbolSize: 8 }
        ]
      }
    ]
  }

  constructor(private styling: StylingService) { }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  toggleMenu(button: HTMLElement) {

    const todayMenu = document.querySelector('#todayMenu') as Menu;
    const rect = button.getBoundingClientRect();

    Array.from(document.getElementsByTagName('smart-menu'))
      .filter(currentMenu => currentMenu !== todayMenu)
      .forEach(currentMenu => currentMenu.close());

    document.querySelectorAll('.dropdown-menu-show').forEach(e => {
      e.classList.remove('dropdown-menu-show');
    })

    document.querySelectorAll('.dropdown-button')
      .forEach(menu => menu.classList.remove('dropdown-button-active'));

    if (!todayMenu.opened) {

      todayMenu.open(rect.right - todayMenu.offsetWidth, rect.bottom + window.scrollY);

    } else {

      todayMenu.close();

    }

  }
}
