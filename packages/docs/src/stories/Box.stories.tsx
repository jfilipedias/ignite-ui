import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box ',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
        inventore dignissimos, nulla, ipsum officia magni eius unde dicta a in
        voluptates vitae placeat, animi dolores odio praesentium explicabo!
        Perspiciatis, quod.
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
