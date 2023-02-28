import { X } from 'phosphor-react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { Box } from '@/components/Box'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { keyframes, styled } from '@/styles'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 32px))` },
  to: { transform: 'translateX(0)' },
})

export const ToastProvider = ToastPrimitive.Provider

const ToastRoot = styled(ToastPrimitive.Root, {
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
})

const ToastClose = styled(ToastPrimitive.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$gray200',
  cursor: 'pointer',
})

const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  zIndex: 9999,
})

export interface ToastProps extends ToastPrimitive.ToastProps {
  title: string
  description: string
}

export function Toast({ title, description, children, ...props }: ToastProps) {
  return (
    <>
      <ToastRoot asChild {...props}>
        <Box css={{ padding: '$3 $5' }}>
          <ToastPrimitive.Title asChild>
            <Heading>{title}</Heading>
          </ToastPrimitive.Title>
          <ToastPrimitive.Description asChild>
            <Text size="sm">{description}</Text>
          </ToastPrimitive.Description>
          <ToastClose asChild>
            <X size={20} />
          </ToastClose>
        </Box>
      </ToastRoot>
      <ToastViewport />
    </>
  )
}
