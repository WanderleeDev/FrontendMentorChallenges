import { Component, Input } from '@angular/core';
import { FilterJobsService } from 'src/app/services/filter-jobs.service';

@Component({
  selector: 'app-btn-base',
  templateUrl: './btn-base.component.html',
  styleUrls: ['./btn-base.component.scss']
})
export class BtnBaseComponent {
  @Input() btnImage = '';
  @Input() textBtn = 'Default';

  constructor(
    private filterJobsService: FilterJobsService
    ){}

  public remove(param: string) {
    this.btnImage
      &&  this.filterJobsService.removeFilter(param)
  }
}
