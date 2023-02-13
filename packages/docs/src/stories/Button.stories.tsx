import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button ',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Big: Story = {
  args: {
    variant: 'big',
  },
}
