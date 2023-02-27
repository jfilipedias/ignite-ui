import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Email address</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

type Story = StoryObj<TextInputProps>

export const Primary: Story = {
  args: {
    type: 'email',
    placeholder: 'Type your email address',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
