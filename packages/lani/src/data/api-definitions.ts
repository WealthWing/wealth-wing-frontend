import { components } from 'data/api';

type Components = components['schemas'];

export type CreateJobRequest = Components['ProjectCreate'];
export type JobResponse = Components['ProjectResponse'];
export type CateoryResponse = Components['CategoryResponse'];
export type ProjectUpdateRequest = Components['ProjectUpdate'];
