import { Action } from 'redux';

export interface ActionPayloadOptional<T, U> extends Action<T> {
    payload?: U;
}

export type ActionPayloadRequired<T, U> = Required<ActionPayloadOptional<T, U>>

