import { Action } from '@ngrx/store';
import { type } from '../utils/utils';
import { IWatchlistsModel } from '../models/watch-lists.model';


/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 * 
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique. 
 */
export const ActionTypes = {
  LOAD: type('[Watchlists] Load'),
  ADD:  type('[Watchlists] Add watch list')
}


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 * 
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: IWatchlistsModel) { }
}

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: IWatchlistsModel) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction
  | AddAction;