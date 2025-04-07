import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [NgOptimizedImage, NgForOf],
})
export class DialogComponent {
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() primaryButtonText: string = 'OK';
  @Input() secondaryButtonText?: string;
  @Input() cards: { src: string; text: string }[] = [];
  @Output() primaryClick = new EventEmitter<void>();
  @Output() secondaryClick = new EventEmitter<void>();
  @Output() closeClick = new EventEmitter<void>();
  @Output() cardClick = new EventEmitter<{ src: string; text: string }>();

  onPrimaryClick() {
    this.primaryClick.emit();
  }

  onSecondaryClick() {
    this.secondaryClick.emit();
  }

  close() {
    this.closeClick.emit();
  }

  onCardClick(card: { src: string; text: string }) {
    this.cardClick.emit(card);
  }
}
