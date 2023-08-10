import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJobPosting } from 'src/interface/IJobPosting.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {
  private url = '../../DB/data.json';

  constructor( private http: HttpClient) {}

  getData(): Observable<IJobPosting[]> {
    return this.http.get<IJobPosting[]>(this.url);
  }
}
