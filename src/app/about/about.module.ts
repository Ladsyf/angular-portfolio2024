import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';
import { BackgroundComponent } from './background/background.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AboutComponent,
    BackgroundComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
