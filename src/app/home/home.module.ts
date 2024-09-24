import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { homeRoutes } from './routes';
import { GithubIconButtonComponent } from './github-icon-button/github-icon-button.component';
import { LinkedinIconButtonComponent } from './linkedin-icon-button/linkedin-icon-button.component';
import { DownloadCvButtonComponent } from './download-cv-button/download-cv-button.component';

@NgModule({
  declarations: [
    BackgroundComponent,
    HomeComponent,
    IntroductionComponent,
    GithubIconButtonComponent,
    LinkedinIconButtonComponent,
    DownloadCvButtonComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
  ]
})
export class HomeModule { }
