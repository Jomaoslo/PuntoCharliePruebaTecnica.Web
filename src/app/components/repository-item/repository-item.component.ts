import { Component, Input } from '@angular/core';
import { RepositoryResults } from '../../interfaces/repository';

@Component({
  selector: 'app-repository-item',
  standalone: true,
  imports: [],
  templateUrl: './repository-item.component.html',
  styleUrl: './repository-item.component.css'
})
export class RepositoryItemComponent {
  @Input() repositoryInfo!: RepositoryResults;
}
