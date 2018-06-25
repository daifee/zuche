import { createDispatch, createGetState } from '../../../store/scope';

export const SCOPE = 'HOMEPAGE';


export const dispatch = createDispatch(SCOPE);
export const getState = createGetState(SCOPE);
