import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Redirect } from 'react-router-dom';
import { uuid } from 'uuidv4';

import styles from './Overview.scss'

import { RootState } from "../../core/root.reducer";
import { getCasesSummary } from "./redux/actions";
import { logoutUser } from "../auth/redux/actions";

import NavBar from "../../common/NavBar/NavBar";
import Spinner from "../../common/Spinner/Spinner";

const Overview: FC = () => {
    const dispatch = useDispatch();
    const {overview, isAuthenticated} = useSelector((state: RootState) => ({
        overview: state.overview,
        isAuthenticated: state.auth.isAuthenticated
    }), shallowEqual);

    useEffect(() => {
        dispatch(getCasesSummary());
    }, [])

    const handleLogout = () => dispatch(logoutUser());

    if (!isAuthenticated) return <Redirect to="/" />;

    return (
        <main className={styles.main}>
            { !overview.done && <Spinner /> }
            <NavBar onLogout={handleLogout} />
            { overview.summary.Date && (
                <section className={styles.wrapper}>
                    <div className={styles.block}>
                        <h3>Data for {new Date(overview.summary.Date).toLocaleString()}</h3>
                    </div>
                    <div className={styles.block}>
                        <ul>
                            <li className={styles.li}>
                                <span> </span>
                                <span>country</span>
                                <span>total cases</span>
                            </li>
                            {overview.summary.Countries.map((c, index) => (
                                <li className={styles.li} key={uuid()}>
                                    <span>{index + 1}</span>
                                    <span>{c.Country}</span>
                                    <span>{c.TotalConfirmed}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </section>
            ) }

        </main>
    )
};

export default Overview;
