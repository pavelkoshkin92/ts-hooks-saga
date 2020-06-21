import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import {useDispatch, useSelector} from "react-redux";

import { Props, HandleSubmit, ValidateEmailPassword, ValidationErrors, ShowError } from "./types";
import styles from './Auth.scss'

import Form from "../../common/Form/Form";
import Input from "../../common/Input/Input";

const validate: ValidateEmailPassword = values => {
    const errors: ValidationErrors = {};
    if (!values.email.trim()) {
        errors.email = 'This field cannot be empty';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,8}$/.test(values.email)) {
        errors.email = 'The email is not correct';
    }
    if (values.password.trim().length < 4) {
        errors.password = 'The password cannot have less than 4 symbols';
    }
    console.log(errors)
    return errors;
}

const showError: ShowError = (type, formik, focused) => {
    if (formik.errors[type] && !focused) {
        return !formik.values[type].trim()
            ? formik.submitCount > 0 ? formik.errors[type] : ''
            : formik.errors[type]
    }
    return '';
};

const Auth: FC<Props> = (props) => {
    const handleSubmit: HandleSubmit = password => {
        // event.preventDefault();
    }

    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            if (!formik.errors.email && !formik.errors.password) {
                handleSubmit({username: values.email, password: values.password});
            }
        }
    });


    return (
        <div className={styles.bg}>
            <h1 className={styles.title}>covid19 app</h1>
            <Form onSubmit={formik.handleSubmit}>
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    error={showError('email', formik, emailFocused)}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={e => {
                        formik.handleBlur(e);
                        setEmailFocused(false);
                    }}
                    onFocus={() => setEmailFocused(true)}
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    error={showError('password', formik, passwordFocused)}
                    value={formik.values.password}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={e => {
                        formik.handleBlur(e);
                        setPasswordFocused(false);
                    }}
                    onChange={formik.handleChange}
                />
            </Form>
        </div>
    )
};

export default Auth;
