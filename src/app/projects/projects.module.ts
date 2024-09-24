import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background/background.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    BackgroundComponent,
    ProjectsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProjectsModule { }
