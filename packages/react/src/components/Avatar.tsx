import { User } from 'phosphor-react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '@/styles'

const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: 'inline-block',
  width: '$16',
  height: '$16',
  borderRadius: '$full',
  overflow: 'hidden',
})

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
    color: '$gray400',
  },
})

export type AvatarProps = AvatarPrimitive.AvatarImageProps

export function Avatar(props: AvatarProps) {
  return (
    <AvatarRoot>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarRoot>
  )
}
