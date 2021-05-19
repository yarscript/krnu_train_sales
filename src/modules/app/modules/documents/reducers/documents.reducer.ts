import { createReducer, on } from '@ngrx/store';

import {
  DocumentApiActions, DocumentCreatePageActions
}                                            from '@/modules/app/modules/documents/actions'
import { Document } from "@/modules/app/modules/documents/interfaces/document-state.interface";


export const DocumentsFeatureKey = 'documents';

export interface State
{
  // user: User | null;
  documents: Document[]
}

export const initialState: State = {
  documents: []
};

export const reducer = createReducer(
  initialState,
  on(DocumentApiActions.initSuccess, (state, { documents }) => {
    return { ...state, documents }
  }),
  on(DocumentApiActions.createSuccess, (state, { document }) => {
    return { ...state, documents: [ document ] }
  }),
);

export const getDocuments = (state: State) => state.documents;
