import {
    OverviewState,
    OVERVIEW_GET_SUMMARY_START,
    OVERVIEW_GET_SUMMARY_SUCCESS,
    OVERVIEW_GET_SUMMARY_ERROR,
    OVERVIEW_CLEAR
} from "../constants/types";

import { ActionPayloadOptional } from "../../../../constants/types";

const initialState: OverviewState = {
    summary: {
        Global: {
            NewConfirmed: 0,
            TotalConfirmed: 0,
            NewDeaths: 0,
            TotalDeaths: 0,
            NewRecovered: 0,
            TotalRecovered: 0
        },
        Countries: [],
        Date: ''
    },
    done: true
};

const overviewReducer = (
    state: OverviewState = initialState,
    action: ActionPayloadOptional<string, any>
): OverviewState => {
    switch (action.type) {
        case OVERVIEW_GET_SUMMARY_START: return {...state, done: false};
        case OVERVIEW_GET_SUMMARY_SUCCESS:
            return {
                ...state,
                done: true,
                summary: {
                    ...action.payload,
                    Countries: action.payload.Countries.sort(
                        (a:{TotalConfirmed: number}, b: {TotalConfirmed: number}) =>
                            b.TotalConfirmed-a.TotalConfirmed
                    )
                }
            };
        case OVERVIEW_GET_SUMMARY_ERROR: return {...state, done: true};
        case OVERVIEW_CLEAR: return {...initialState};
        default: return state;
    }
};

export default overviewReducer;
