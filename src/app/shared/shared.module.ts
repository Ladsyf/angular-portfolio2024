import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { LetDirective } from '@ngrx/component';
import { PageSelectorComponent } from './page-selector/page-selector.component';
import { PagingComponent } from './paging/paging.component';
import { ModalComponent } from './modal/modal.component';
import { BackgroundComponent as ProjectBackgroundComponent} from '../projects/background/background.component';

@NgModule({
  declarations: [
    IconButtonComponent,
    ButtonComponent,
    PageSelectorComponent,
    PagingComponent,
    ModalComponent,
    ProjectBackgroundComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    LetDirective,
  ],
  exports: [
    CommonModule,
    IconButtonComponent,
    ButtonComponent,
    RouterLink,
    RouterModule,
    LetDirective,
    PageSelectorComponent,
    PagingComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
