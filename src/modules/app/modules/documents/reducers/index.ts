import {
  createSelector, createFeatureSelector, Action, combineReducers,
} from '@ngrx/store';

import * as fromRoot          from '@/modules/app/reducers';
import * as fromCreatePage    from '@/modules/app/modules/documents/reducers/create-page.reducer';
import * as fromDocumentReducers from '@/modules/app/modules/documents/reducers/documents.reducer';


export const DocumentsFeatureKey = 'documents';


export interface DocumentState
{
  [fromDocumentReducers.DocumentsFeatureKey]: fromDocumentReducers.State;
  [fromCreatePage.createPageFeatureKey]: fromCreatePage.State;
}

export interface State extends fromRoot.State
{
  [DocumentsFeatureKey]: DocumentState;
}

export function reducers(state: DocumentState | undefined, action: Action) {
  return combineReducers({
    [fromCreatePage.createPageFeatureKey]: fromCreatePage.reducer,
    [fromDocumentReducers.DocumentsFeatureKey]: fromDocumentReducers.reducer,
  })(state, action);
}

export const selectDocumentsState = createFeatureSelector<State, DocumentState>(
  DocumentsFeatureKey
);

export const selectDocumentEntitiesState = createSelector(
  selectDocumentsState, (state) => state.documents
);
export const selectDocuments = createSelector(
  selectDocumentEntitiesState, fromDocumentReducers.getDocuments
);


export const selectCreatePageState = createSelector(
  selectDocumentsState, (state) => state.createPage
);
export const selectCreatePageError = createSelector(
  selectCreatePageState, fromCreatePage.getError
);
export const selectCreatePagePending = createSelector(
  selectCreatePageState, fromCreatePage.getPending
);
