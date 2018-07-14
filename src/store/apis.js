import { createDispatch, createGetState } from './scope';

export const SCOPE = 'GLOBAL';


export const dispatch = createDispatch(SCOPE);
export const getState = createGetState(SCOPE);
