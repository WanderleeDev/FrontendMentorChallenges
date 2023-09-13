import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterJobsService } from 'src/app/services/filter-jobs.service';
import { JobDataService } from 'src/app/services/job-data.service';
JobDataService
import { IJobPosting } from 'src/interface/IJobPosting.interface';

@Component({
  selector: 'app-btn-base',
  templateUrl: './btn-base.component.html',
  styleUrls: ['./btn-base.component.scss']
})
export class BtnBaseComponent implements OnInit, OnDestroy{
  @Input() btnImage = '';
  @Input() textBtn = 'Default';
  listFilter!: string[];
  filterSub!: Subscription;

  constructor(
    private filterSvc: FilterJobsService,
    private jobSvc: JobDataService
    ){}

  ngOnInit(): void {
    this.filterSub = this.filterSvc.getFiltersObservable().subscribe(res => this.listFilter = res)
  }
  ngOnDestroy(): void {
    this.filterSub.unsubscribe()
  }

  public remove(param: string) {
    //  si no tiene btnImage sale del la función
    if (!this.btnImage) { return }

    //  elimina un filtro
    this.filterSvc.removeFilter(param)

    //  si no hay filtros activos retorna la lista de trabajos original
    if (this.listFilter.length <= 0) {
      return this.jobSvc.updateJobs(this.jobSvc.getInitialJobs())
    }

    //  vuelve a filtrar con los filtros restantes
    const newList: IJobPosting[] = this.filterSvc.filterJob(this.listFilter,this.jobSvc.getInitialJobs())
    
    //  actualiza el observable de trabajos
    this.jobSvc.updateJobs(newList)
  }
}
