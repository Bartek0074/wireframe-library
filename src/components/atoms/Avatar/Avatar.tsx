import {
    Avatar as UiAvatar,
    AvatarFallback as UiAvatarFallback,
    AvatarImage as UiAvatarImage,
    type AvatarFallbackProps as UiAvatarFallbackProps,
    type AvatarImageProps as UiAvatarImageProps,
    type AvatarProps as UiAvatarProps,
} from '@/components/ui/avatar'

function Avatar(props: UiAvatarProps) {
    return <UiAvatar {...props} />
}

function AvatarImage(props: UiAvatarImageProps) {
    return <UiAvatarImage {...props} />
}

function AvatarFallback(props: UiAvatarFallbackProps) {
    return <UiAvatarFallback {...props} />
}

export { Avatar, AvatarFallback, AvatarImage }
export type { UiAvatarFallbackProps as AvatarFallbackProps, UiAvatarImageProps as AvatarImageProps, UiAvatarProps as AvatarProps }