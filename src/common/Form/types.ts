import { ReactElement, FormEvent } from 'react';

export interface Props {
    children: ReactElement | ReactElement[],
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
