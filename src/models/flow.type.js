import Model from './Model';

export type DOC = {[key: string]: ?any};

export type DOC_ARRAY = Array<?DOC>;

export type COLLECTION_ITERATEE = (model: Model, index: number) => any;
