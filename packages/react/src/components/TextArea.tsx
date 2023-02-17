import { ComponentProps } from 'react'
import { styled } from '@/styles'

export const TextArea = styled('textarea', {
  boxSizing: 'border-box',
  minHeight: 80,
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

TextArea.displayName = 'TextArea'

export type TextAreaProps = ComponentProps<typeof TextArea>
