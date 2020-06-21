import { FormEvent } from 'react';

export interface Props {
    type: string,
    value: string,
    label: string,
    name: string,
    error? :string
    onChange: (e: FormEvent) => void,
    onFocus: (e: FormEvent) => void,
    onBlur: (e: FormEvent) => void
}
