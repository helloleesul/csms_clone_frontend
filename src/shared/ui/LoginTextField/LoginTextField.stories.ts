import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { LoginTextField } from "./LoginTextField.tsx";

const meta = {
  title: "TextFields/LoginTextField",
  component: LoginTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: { control: "text" },
    placeholder: { control: "text" },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof LoginTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "ID",
    value: "",
  },
};
