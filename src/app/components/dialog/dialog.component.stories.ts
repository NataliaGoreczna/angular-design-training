import { Meta, StoryFn } from '@storybook/angular';
import { DialogComponent } from './dialog.component';

export default {
  title: 'Components/Dialog',
  component: DialogComponent,
  argTypes: {
    header: { control: 'text' },
    description: { control: 'text' },
    primaryButtonText: { control: 'text' },
    secondaryButtonText: { control: 'text' },
    cards: { control: 'object' },
    primaryClick: { action: 'primaryClick' },
    secondaryClick: { action: 'secondaryClick' },
    closeClick: { action: 'closeClick' },
    cardClick: { action: 'cardClick' },
  },
} as Meta<DialogComponent>;

const Template: StoryFn<DialogComponent> = (args) => ({
  props: {
    ...args,
    primaryClick: args.primaryClick,
    secondaryClick: args.secondaryClick,
    closeClick: args.closeClick,
    cardClick: args.cardClick,
  },
});

export const Default = Template.bind({});
Default.args = {
  header: 'Sample Header',
  description: 'This is a sample description.',
  primaryButtonText: 'OK',
  cards: [
    { src: '/assets/business.svg', text: 'B2B/SaaS' },
    { src: '/assets/healthcare.svg', text: 'Healthcare' },
  ],
};
