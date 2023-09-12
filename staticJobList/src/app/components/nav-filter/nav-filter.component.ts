import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterJobsService } from 'src/app/services/filter-jobs.service';
//  services

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
    private filterJobsService: FilterJobsService
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
    console.warn('subscription finally');
  }


  public clearFilter() {
    this.filterJobsService.resetFilter();
  }

  public remove(toRemove: string) {
    this.filterJobsService.removeFilter(toRemove);
  }
}
