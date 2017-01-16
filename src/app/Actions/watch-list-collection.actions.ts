/**
 * The only way to modify state within a store application is by dispatching actions.
 * Because of this, a log of actions should present a clear, readable, history of user interaction.
 * Actions are generally defined as string constants or as static string values on services
 * encapsulating a particular action type. In the latter case, functions are provided to
 * return an appropriate action given the correct input.
 * These methods, which help standardize your actions while providing additional type safety,
 * are known as action creators.
 *
 * For the case of our starter application we will export a string constant for each application action.
 * These will then be used as the keys to our reducer case statements
 * and the type for every dispatched action.
 * 
 * REF: https://gist.github.com/btroncone/a6e4347326749f938510#configuring-store-actions
 *
 */
import { Action } from '@ngrx/store';
import { type } from '../utils/utils';
import { IWatchlistModel } from '../models/watch-lists.model';


/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 * 
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique. 
 */
export const ActionTypes = {
  LOAD: type('[Watchlist] Load watchlists'),
  ADD:  type('[Watchlist] Add watchlists')
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

  constructor(public payload: IWatchlistModel[]) { }
}

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: IWatchlistModel[]) { } //NB(DSF): why this need to be an array? I get an error when removed this
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */

export type Actions
  = LoadAction
  | AddAction;