import { Component } from '@angular/core';

@Component({
  selector: 'app-examples-board',
  templateUrl: './examples-board.component.html',
  styleUrls: ['./examples-board.component.scss']
})
export class ExamplesBoardComponent {
  IpList = {
    title: 'Examples IP',
    list: ['206.71.50.230', '195.12.50.155']
  }
  domainList = {
    title: 'Examples Domain',
    list: ['amazon.com', 'samsung.com']
  }
}
