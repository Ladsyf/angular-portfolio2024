import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectRecordComponent } from './project-record/project-record.component';
import { ProjectsComponent } from './projects.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectRecordComponent,
    ProjectDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
