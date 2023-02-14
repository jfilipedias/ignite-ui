import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text ',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non obcaecati nobis illum enim asperiores iure accusantium vel, laboriosam similique fugiat rem, iusto recusandae. Ipsa expedita commodi illum culpa aliquam hic.',
  },
} as Meta<TextProps>

type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
