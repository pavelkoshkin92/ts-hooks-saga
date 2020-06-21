export const OVERVIEW_GET_SUMMARY = 'OVERVIEW_GET_SUMMARY';
export const OVERVIEW_GET_SUMMARY_START = 'OVERVIEW_GET_SUMMARY_START';
export const OVERVIEW_GET_SUMMARY_SUCCESS = 'OVERVIEW_GET_SUMMARY_SUCCESS';
export const OVERVIEW_GET_SUMMARY_ERROR = 'OVERVIEW_GET_SUMMARY_ERROR';
export const OVERVIEW_CLEAR = 'OVERVIEW_CLEAR';

interface Global {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
}

interface CountrySummary {
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string
}

export interface SummaryState {
    Global: Global,
    Countries: CountrySummary[],
    Date: string
}

export interface OverviewState {
    done: boolean
    summary: SummaryState
}
