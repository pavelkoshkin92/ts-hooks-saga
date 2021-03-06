export type ValidationErrors =  {
    email?: string,
    password?: string
};

export type ValidateEmailPassword = (values: {email: string, password: string}) => ValidationErrors;

type Formik = {
    submitCount: number
    errors: {
        [key: string] :string | undefined
    },
    values: {
        [key: string] :string
    }

}

export type ShowError = (type: string, formik: Formik, focused: boolean) => string | undefined;
