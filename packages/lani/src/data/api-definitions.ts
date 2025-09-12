import { components, paths } from 'data/api';

type Components = components['schemas'];

export type CreateJobRequest = Components['ProjectCreate'];
export type JobResponse = Components['ProjectResponse'];
export type CateoryResponse = Components['CategoryResponse'];
export type ProjectUpdateRequest = Components['ProjectUpdate'];
export type AccountResponse = Components['AccountResponse'];
export type AccountRequest = Components['AccountCreate'];
export type AccountType = Components['AccountTypeEnum'];
export type AccountUpdateRequest = Components['AccountUpdate'];
export type ImportFileCreateRequest = Components['ImportFileCreate'];
export type ImportFileCreateResponse = Components['ImportFileResponse'];
export type ImportFileCompleteRequest = Components['ImportCompleteRequest'];
export type AccountOption = Components['AccountOptionResponse'];
export type ImportsRequestParams = paths['/import/imports']['get']['parameters']['query'];
export type ImportFileResponse = Components['ImportFileResponse'];
export type ImportFileListItem = Components['ImportFileListItem'];
export type ImportJobStatus = Components['ImportJobStatus'];
export type TransactionResponse = Components['TransactionResponse'];
export type TransactionRequest = paths['/transaction/all']['get']['parameters']['query'];
export type TransactionAllResponse = Components['TransactionsAllResponse'];
export type TransactionSummaryResponse = Components['TransactionSummaryResponse'];
export type TransactionMonths = Components['TransactionMonths'][];
export type TransactionTotals = Components['TransactionTotals'];
export type TransactionSummaryRequest = paths['/transaction/summary']['get']['parameters']['query'];
export type UserResponse = Components['UserResponse'];
export type TransactionTypes = 'income' | 'expense' | 'transfer' | 'deposit' | 'withdrawal';
