import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterJobsService {

  private filtersSubject = new BehaviorSubject<string[]>(['js', 'html'])

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

  public filterJob(valFilter: string) {
    const prevValue = this.filtersSubject.value.filter( param => param !== valFilter)
    this.filtersSubject.next([...prevValue])
  }
}
