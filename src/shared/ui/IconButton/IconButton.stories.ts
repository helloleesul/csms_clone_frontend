import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import CircleX from "@/shared/assets/icons/circle-x.svg";

import { IconButton } from "./IconButton.tsx";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imagePath: { control: "text" },
    imageAlt: { control: "text" },
    className: { control: "text" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imagePath: CircleX,
    imageAlt: "close",
    className: "",
  },
};
