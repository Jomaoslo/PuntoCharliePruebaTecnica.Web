import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoryResult } from '../interfaces/repository';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'http://localhost:35205/Api/Repository'

  constructor(private http: HttpClient) { }

  public getDataRepository(): Observable<RepositoryResult>{
    return this.http.get<RepositoryResult>(this.urlApi);
  }
}
