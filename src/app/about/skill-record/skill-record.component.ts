import { Component, Input } from '@angular/core';
import { ISkill } from '../../../variables/skills';

@Component({
  selector: 'app-skill-record',
  templateUrl: './skill-record.component.html',
  styleUrl: './skill-record.component.css'
})
export class SkillRecordComponent {
  @Input() record!: ISkill
}
