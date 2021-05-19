import { createAction, props } from '@ngrx/store';

import { Storage } from "@/modules/app/modules/storages/interfaces/storage-state.interface";

export const create = createAction(
  '[Storage/Page/Crete] Create Storage', props<{ storage: Storage }>()
);
