import type { Meta, StoryObj } from '@storybook/react';
import "../../../App.css";
import { Rounding } from '../../../types/Rounding';
 
import { Input } from './Input';
 
const meta: Meta<typeof Input> = {
  component: Input,
};
 
export default meta;
type Story = StoryObj<typeof Input>;
 
export const NoRounding: Story = {
  args: {
    label: "Test Input",
    placeholder: "Enter text here...",
    rounding: Rounding.None,
  },
};

export const SmallRounding: Story = {
    args: {
      label: "Test Input",
      placeholder: "Enter text here...",
      rounding: Rounding.Small,
    },
};

  export const MediumRounding: Story = {
    args: {
      label: "Test Input",
      placeholder: "Enter text here...",
      rounding: Rounding.Medium,
    },
};

  export const LargeRounding: Story = {
    args: {
      label: "Test Input",
      placeholder: "Enter text here...",
      rounding: Rounding.Large,
    },
};