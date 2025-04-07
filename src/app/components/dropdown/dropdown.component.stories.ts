import { Meta, StoryFn } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

export default {
  title: 'Components/Dropdown',
  component: DropdownComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The `DropdownComponent` is a simple dropdown menu that allows users to select an option from a list. It includes a default option prompting the user to select an option and several predefined options.',
      },
    },
  },
} as Meta<DropdownComponent>;

const Template: StoryFn<DropdownComponent> = (args: DropdownComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
