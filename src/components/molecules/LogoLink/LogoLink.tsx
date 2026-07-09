import Link from 'next/link'
import { Logo } from '@/components/atoms/Logo'

export interface LogoProps {
    href: string
}

function LogoLink({ href }: LogoProps) {
    return (
        <Link href={href}>
            <Logo
                variant="wideNeutral"
                className="hover:border-brand/60 hover:text-brand transition-colors cursor-pointer"
            />
        </Link>
    )
}

export { LogoLink }
