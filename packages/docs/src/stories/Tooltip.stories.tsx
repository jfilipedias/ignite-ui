import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@ignite-ui-filipe/react'

export default {
  title: 'Surfaces/Tooltip ',
  component: Tooltip,
  args: {
    children: (
      <Box css={{ width: '$6' }}>
        <Text css={{ display: 'inline' }}>26</Text>
      </Box>
    ),
    description: 'October 26 - Available',
  },
  decorators: [
    (story) => {
      return <TooltipProvider>{story()}</TooltipProvider>
    },
  ],
} as Meta<TooltipProps>

type Story = StoryObj<TooltipProps>

export const Primary: Story = {}
