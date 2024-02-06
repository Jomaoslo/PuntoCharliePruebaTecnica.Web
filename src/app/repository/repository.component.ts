import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RepositoryItemComponent } from '../components/repository-item/repository-item.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';
import { RepositoryService } from '../services/repository.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { RepositoryResults } from '../interfaces/repository';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [AsyncPipe, RepositoryItemComponent, ErrorMessageComponent],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.css'
})
export class RepositoryComponent implements OnInit {
  public repositoryResults$!: Observable<RepositoryResults>;
  public errorMessage!: string;
  constructor(private service: RepositoryService) { }

  ngOnInit(): void {
    this.repositoryResults$ = this.service.getRepositoryList().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))
  }
}
