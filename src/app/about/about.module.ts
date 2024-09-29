import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';
import { BackgroundComponent } from './background/background.component';
import { routes } from './routes';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceRecordComponent } from './experience-record/experience-record.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { SkillComponent } from './skill/skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillRecordComponent } from './skill-record/skill-record.component';
import { PageSelectorComponent } from './page-selector/page-selector.component';

@NgModule({
  declarations: [
    AboutComponent,
    BackgroundComponent,
    ExperienceComponent,
    ExperienceRecordComponent,
    ExperienceListComponent,
    SkillComponent,
    SkillListComponent,
    SkillRecordComponent,
    PageSelectorComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
