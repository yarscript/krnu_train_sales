import { createAction, props } from '@ngrx/store';

import { Deal }        from "@/modules/app/modules/deals/interfaces/deal-state.interface";

export const create = createAction(
  '[Deal/Page/Crete] Create Firm', props<{ organisation: Deal }>()
);
