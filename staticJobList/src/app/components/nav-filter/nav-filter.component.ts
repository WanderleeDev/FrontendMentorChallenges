import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.scss']
})
export class NavFilterComponent {
  itemList = ['Frontend', 'CSS', 'JavaScript']
}
