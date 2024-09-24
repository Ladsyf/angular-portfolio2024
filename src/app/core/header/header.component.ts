import { Component } from '@angular/core';
import { personal } from '../../../variables/personal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public personal = personal;
}
