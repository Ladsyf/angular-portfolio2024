import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BackgroundComponent } from './background/background.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SectionComponent } from './section/section.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SectionComponent,
    HamburgerComponent,
    SideNavComponent,
    BackgroundComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    LayoutComponent,
  ]
})
export class CoreModule { }
