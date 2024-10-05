import { Component } from '@angular/core';
import { ListPagination } from '../../shared/paging/paging.abstract';
import { experiences, IExperience } from './../../../variables/experience';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent extends ListPagination<IExperience> {
  protected override records: IExperience[] = experiences;

  protected override getMaximumRecordsPerPage(): number {
    const width = this._screenCoords.width;

    if (width >= 1300) return 3;
    else if (width >= 1000) return 2;
    else if (width >= 800) return 2;
    return 1;
  }
}
