import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-tag',
  templateUrl: './special-tag.component.html',
  styleUrls: ['./special-tag.component.scss']
})
export class SpecialTagComponent {
  @Input() isNew = false
  @Input() isFeatured = false
}
