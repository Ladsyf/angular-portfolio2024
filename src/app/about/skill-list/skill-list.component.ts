import { Component } from '@angular/core';
import { ListPagination } from '../../shared/paging/paging.abstract';
import { ISkill, skills } from './../../../variables/skills';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.css'
})
export class SkillListComponent extends ListPagination<ISkill> {
  protected override records: ISkill[] = skills;

  protected override getMaximumRecordsPerPage(): number {
    const height = this._screenCoords.height;

    if (height >= 1300) return skills.length + 1;
    else if (height >= 800) return 15;
    else if (height >= 730) return 8;
    else if (height >= 600) return 6;
    return 4;
  }
}
