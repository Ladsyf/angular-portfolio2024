import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BackgroundComponent } from './background/background.component';
import { ProjectsComponent } from './projects.component';



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
