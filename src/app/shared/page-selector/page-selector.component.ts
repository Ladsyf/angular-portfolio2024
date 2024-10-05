import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-selector',
  templateUrl: './page-selector.component.html',
  styleUrl: './page-selector.component.css'
})
export class PageSelectorComponent {
  @Input() isSelected: boolean = false;
}
