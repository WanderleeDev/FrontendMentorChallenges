import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-base',
  templateUrl: './btn-base.component.html',
  styleUrls: ['./btn-base.component.scss']
})
export class BtnBaseComponent {
  @Input() btnImage = '';
  @Input() textBtn = 'Default'; 
}
