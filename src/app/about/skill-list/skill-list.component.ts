import { skills } from './../../../variables/skills';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.css'
})
export class SkillListComponent {
  public skills = skills
}
