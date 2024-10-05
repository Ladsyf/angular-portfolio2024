import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrl: './paging.component.css'
})
export class PagingComponent {
  @Input() numberOfPages!: number;
  @Input() currentPage: number = 1;

  @Output() onChangeCurrentPage = new EventEmitter<number>();
}
