import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  services
import { FilterJobsService } from 'src/app/services/filter-jobs.service';
import { JobDataService } from 'src/app/services/job-data.service';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.scss']
})
export class NavFilterComponent implements OnInit, OnDestroy{
  itemList: string[] = [];
  filterSub!: Subscription;
  iconBtn = '../../../assets/images/icon-remove.svg'

  constructor(
    private filterJobsService: FilterJobsService,
    private jobDataService: JobDataService
  ){}

  ngOnInit(): void {
    this.filterSub = this.filterJobsService.getFiltersObservable()
      .subscribe({
        next: (res) => this.itemList = res,
        error: (err) => console.error('Ocurrió un error:', err),
        complete: () => console.log('La suscripción se ha completado.')
      })
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe()
  }

  public clearFilter() {
    this.filterJobsService.resetFilter();
    this.jobDataService.restoreJobs()
  }

}
