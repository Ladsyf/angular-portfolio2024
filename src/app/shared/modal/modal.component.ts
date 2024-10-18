import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() isOpened: boolean = false;
  @ViewChild('dialog') dialogRef!: ElementRef<HTMLDialogElement>;

  public show() {
    this.dialogRef.nativeElement.showModal();
  }

  public close() {
    this.dialogRef.nativeElement.close();
  }
}
