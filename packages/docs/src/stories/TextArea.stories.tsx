import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui-filipe/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Comment</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

type Story = StoryObj<TextAreaProps>

export const Primary: Story = {
  args: {
    placeholder: 'Add your comment',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
