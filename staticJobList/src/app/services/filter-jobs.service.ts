import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//  interface
import { IJobPosting } from 'src/interface/IJobPosting.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterJobsService {

  private filtersSubject = new BehaviorSubject<string[]>([])
  

  public getFiltersObservable(): Observable<string[]> {
    return this.filtersSubject.asObservable()
  }

  public addFilter(newFilter: string) {
    const updateFilter = this.filtersSubject.value
    updateFilter.push(newFilter)
    this.filtersSubject.next([...updateFilter])
  }

  public removeFilter(toRemove: string) {
    const remainingFilters = this.filtersSubject.value.filter( val => val !== toRemove)
    this.filtersSubject.next([...remainingFilters])
  }

  public resetFilter() {
    this.filtersSubject.next([])
  }

  public filterJob(valFilter: string, list: IJobPosting[]): IJobPosting[] {
    const filteredJobs: IJobPosting[] = [];
    for (const job of list) {
      if (
        job.languages.includes(valFilter) ||
        job.tools.includes(valFilter) ||
        job.level === valFilter ||
        job.role === valFilter
      ) { filteredJobs.push(job)}
    }
    return filteredJobs
  }
}
