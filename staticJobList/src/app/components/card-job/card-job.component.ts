import { Component } from '@angular/core';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.scss']
})
export class CardJobComponent {
  metaTagList = [
    '1d ago',
    'Full time',
    'USA only',
  ]

  btnTag = [
    'Fronted',
    'Senior',
    'HTML',
    'CSS',
    'JavaScript'
  ]
}
