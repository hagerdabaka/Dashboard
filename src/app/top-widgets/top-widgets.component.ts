import { Component, OnInit } from '@angular/core';
import {

  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {

  faLocation = faMoneyBill;
  faShop = faMoneyBill;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  constructor() { }

  ngOnInit(): void {
  }

}
