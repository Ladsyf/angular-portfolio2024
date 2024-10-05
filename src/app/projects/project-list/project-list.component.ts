import { ListPagination } from '../../shared/paging/paging.abstract';
import { IProject, projects } from './../../../variables/project';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent extends ListPagination<IProject>{
  protected override getMaximumRecordsPerPage(): number {
    const width = this._screenCoords.width;
    const height = this._screenCoords.height;

    if (width >= 900) return 6
    if (width >= 600) return 4
    if (height <= 720) return 2;
    return 3;
  }
  protected override records: IProject[] = projects;
}
