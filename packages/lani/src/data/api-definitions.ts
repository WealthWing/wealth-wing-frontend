import { components } from 'data/api';

type Components = components['schemas'];

export type CreateJobRequest = Components['ProjectCreate'];
export type CreateScopeRequest = Components['ScopeCreate'];
export type ScopeResponse = Components['ScopeResponse'];
export type ExpenseResponse = Components['ExpenseResponse'];
export type ExpenseCreateRequest = Components['ExpenseCreate'];
export type JobResponse = Components['ProjectResponse'];
export type CateoryResponse = Components['CategoryResponse'];
export type ProjectUpdateRequest = Components['ProjectUpdate'];
