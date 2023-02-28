import { useArgs } from '@storybook/client-api'
import type { Meta } from '@storybook/react'

import {
  Button,
  Toast,
  ToastProps,
  ToastProvider,
} from '@ignite-ui-filipe/react'

const formattedDate = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'short',
}).format(new Date())

export default {
  title: 'Surfaces/Toast ',
  component: Toast,
  args: {
    open: false,
    title: 'Scheduled: Catch up',
    description: formattedDate,
  },
  decorators: [],
} as Meta<ToastProps>

export const Primary = ({ onOpenChange, ...args }: ToastProps) => {
  const [{ open }, updateArgs] = useArgs()

  const handleOpenChange = () => updateArgs({ open: !open })

  return (
    <>
      <Button onClick={() => updateArgs({ open: true })}>
        Add to calendar
      </Button>
      <ToastProvider>
        <Toast onOpenChange={handleOpenChange} {...args} />
      </ToastProvider>
    </>
  )
}
