import { Action } from '@ngrx/store';
import { WatchlistsModel } from '../models/watch-lists.model';

export const ActionTypes = {
  LOAD: type('[Watchlists] Load'),
  ADD:  type('[Watchlists] Add watch list')
}


export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: WatchlistsModel) { }
}

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: WatchlistsModel) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction
  | AddAction;