import { Component } from '@angular/core';

import {
 
  faShip,
  faBox,
  faMoneyBill,
  faChartBar,

  faHands,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faShop = faShip;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faHand = faHands;

}
