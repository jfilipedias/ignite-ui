import { ComponentProps, ElementRef, forwardRef } from 'react'
import { styled } from '@/styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  backgroundColor: '$gray900',

  '&:focus-within': {
    borderColor: '$ignite300',
  },

  '&.disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Input = styled('input', {
  width: '100%',
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$white',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$gray400',
})

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  function TextInput({ prefix, ...props }, ref) {
    return (
      <TextInputContainer className={props.disabled ? 'disabled' : ''}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} ref={ref} />
      </TextInputContainer>
    )
  },
)
