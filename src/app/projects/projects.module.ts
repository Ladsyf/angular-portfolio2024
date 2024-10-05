import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BackgroundComponent } from './background/background.component';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectRecordComponent } from './project-record/project-record.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';



@NgModule({
  declarations: [
    BackgroundComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectRecordComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
