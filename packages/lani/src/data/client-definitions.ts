import { components } from 'data/api';

type Components = components['schemas'];

export type CreateJobRequest = Components['ProjectCreate'];
export type CreateScopeRequest = Components['ScopeCreate'];
export type ScopeResponse = Components['ScopeResponse'];
export type ExpenseResponse = Components['ExpenseResponse'];
export type JobResponse = Components['ProjectResponse'];
