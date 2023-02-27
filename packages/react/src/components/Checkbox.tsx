import { Check } from 'phosphor-react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { styled, keyframes } from '@/styles'

const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  overflow: 'hidden',
  cursor: 'pointer',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  width: '$4',
  height: '$4',
  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideIn} 150ms ease`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 150ms ease`,
  },
})

export type CheckboxProps = CheckboxPrimitive.CheckboxProps

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}
