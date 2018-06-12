import * as originModels from './models';
import { createModels, createDispatch, createGetState } from '../../../store/scope';

const SCOPE = 'HOMEPAGE';


export const models = createModels(originModels, SCOPE);
export const dispatch = createDispatch(SCOPE);
export const getState = createGetState(SCOPE);

