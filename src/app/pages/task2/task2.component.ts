import { Component } from '@angular/core';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-task2',
  imports: [DialogComponent],
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss'],
})
export class Task2Component {
  readonly DIALOG_CONFIG = {
    header: 'Select Sample Dataset',
    description: 'You can easily switch between datasets in the Demo view.',
    primaryButtonText: 'Explore Demo',
    cards: [
      { src: '/assets/business.svg', text: 'B2B/SaaS' },
      { src: '/assets/healthcare.svg', text: 'Healthcare' },
      { src: '/assets/finance.svg', text: 'Finance' },
      { src: '/assets/media.svg', text: 'Media' },
      { src: '/assets/social.svg', text: 'Social' },
      { src: '/assets/e-commerce.svg', text: 'E-commerce' },
    ],
  };

  onPrimaryClick() {
    console.log('Primary button clicked');
  }

  onSecondaryClick() {
    console.log('Secondary button clicked');
  }

  onCloseClick() {
    console.log('Dialog closed');
  }

  onCardClick(card: { src: string; text: string }) {
    console.log('Card clicked:', card);
  }
}
