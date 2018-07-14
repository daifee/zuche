import { createDispatch, createGetState } from '../../../store/scope';

export const SCOPE = 'SEARCH_CAR';


export const dispatch = createDispatch(SCOPE);
export const getState = createGetState(SCOPE);
