import { Label as UiLabel, type LabelProps } from '@/components/ui/label'

function Label(props: LabelProps) {
    return <UiLabel {...props} />
}

export { Label }
export type { LabelProps }