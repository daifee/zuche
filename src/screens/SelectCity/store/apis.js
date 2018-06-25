import { createDispatch, createGetState } from '../../../store/scope';

export const SCOPE = 'SELECT_CITY';


export const dispatch = createDispatch(SCOPE);
export const getState = createGetState(SCOPE);
