import {
    OVERVIEW_GET_SUMMARY,
    SummaryState
} from "../constants/types";

import {ActionPayloadRequired} from "../../../../constants/types";
import {Action} from "redux";

export const getCasesSummary = (): Action<typeof OVERVIEW_GET_SUMMARY> => ({type: OVERVIEW_GET_SUMMARY});


