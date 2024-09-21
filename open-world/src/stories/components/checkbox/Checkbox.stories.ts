import type { Meta, StoryObj } from '@storybook/react';
 
import { Checkbox } from './Checkbox';
 
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};
 
export default meta;
type Story = StoryObj<typeof Checkbox>;
 
export const Primary: Story = {
  args: {
    checked: true,
    label: "Test Checkbox"
  },
};