import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { RepositoryResults } from '../interfaces/repository';
import { environment } from './../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  getRepositoryList(): Observable<RepositoryResults> {
    console.log(environment.apiUrlBase);
    return this.http.get<RepositoryResults>(environment.apiUrlBase);
  }
}
