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

  //  Retorna
  public getListFilterActive(): string[] {
    return this.filtersSubject.value
  }

  // Agrega un nuevo parámetro al nav de filtros
  public addFilter(newFilter: string) {
    if(this.filtersSubject.value.includes(newFilter)) {return}
    const updateFilter = this.filtersSubject.value
    updateFilter.push(newFilter)
    this.filtersSubject.next([...updateFilter])
  }

  //  Retira un parámetro de la lista de filtros
  public removeFilter(toRemove: string) {
    const remainingFilters = this.filtersSubject.value.filter( val => val !== toRemove)
    this.filtersSubject.next([...remainingFilters])
  }

  //  Elimina los filtros del nav de filtros
  public resetFilter() {
    this.filtersSubject.next([])
  }

  //  Filtra y retorna una lista que al menos tengo 1 conciencia en el array de parámetros(puede ser un array o 1 solo parámetro de entrada)
  public filterJob(valFilter: string | string[], list: IJobPosting[]):IJobPosting[] {
    const newSetJobs = new Set<IJobPosting>()
    
    //  verifica valFilter  si es un string lo pone en un array para facilitar en filtrado
    const filterValues = Array.isArray(valFilter) ? valFilter : [valFilter]

    for (const value of filterValues) {
      list.map( li => {
        [...li.languages, ...li.tools,li.level, li.role].includes(value)
          && newSetJobs.add(li)
      })
    }
    return Array.from(newSetJobs)
  }
}
