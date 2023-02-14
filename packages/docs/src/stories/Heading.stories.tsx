import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading ',
  component: Heading,
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
} as Meta<HeadingProps>

type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
