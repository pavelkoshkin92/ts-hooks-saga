import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Redirect } from 'react-router-dom';

import {OverviewState} from "./redux/constants/types";
import {SessionState} from "../auth/redux/constants/types";
import { getCasesSummary } from "./redux/actions";
import { logoutUser } from "../auth/redux/actions";

import NavBar from "../../common/NavBar/NavBar";

const Overview: FC = () => {
    const dispatch = useDispatch();
    const {overview, isAuthenticated} = useSelector((state: {overview: OverviewState, auth: SessionState}) => ({
        overview: state.overview,
        isAuthenticated: state.auth.isAuthenticated
    }), shallowEqual);

    useEffect(() => {
        dispatch(getCasesSummary());
    }, [])

    const handleLogout = () => dispatch(logoutUser());

    if (!isAuthenticated) return <Redirect to="/" />;

    return (
        <section>
            <NavBar onLogout={handleLogout} />
        </section>
    )
};

export default Overview;
