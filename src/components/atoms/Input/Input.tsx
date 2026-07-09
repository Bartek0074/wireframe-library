import { Input as UiInput, type InputProps } from '@/components/ui/input'
import clsx from 'clsx'

function Input(props: InputProps) {
    return <UiInput {...props} className={clsx(props.className, "h-10")} />
}

export { Input }
export type { InputProps }