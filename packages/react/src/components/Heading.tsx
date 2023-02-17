import { ComponentProps, ElementType } from 'react'
import { styled } from '@/styles'

export const Heading = styled('h2', {
  margin: 0,
  fontFamily: '$default',
  lineHeight: '$short',
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      xl: { fontSize: '$5xl' },
      '2xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

Heading.displayName = 'Heading'

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}
