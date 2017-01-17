import { Action } from '@ngrx/store';
import { Watchlist } from '../models/watchlist';
import { type } from '../util';


export const ActionTypes = {
  ADD_WATCHLIST:             type('[WatchlistCollection] Add Watchlist'),
  ADD_WATCHLIST_SUCCESS:     type('[WatchlistCollection] Add Watchlist Success'),
  ADD_WATCHLIST_FAIL:        type('[WatchlistCollection] Add Watchlist Fail'),
  REMOVE_WATCHLIST:          type('[WatchlistCollection] Remove Watchlist'),
  REMOVE_WATCHLIST_SUCCESS:  type('[WatchlistCollection] Remove Watchlist Success'),
  REMOVE_WATCHLIST_FAIL:     type('[WatchlistCollection] Remove Watchlist Fail'),
  LOAD:                 type('[WatchlistCollection] Load'),
  LOAD_SUCCESS:         type('[WatchlistCollection] Load Success'),
  LOAD_FAIL:            type('[WatchlistCollection] Load Fail'),
};


/**
 * Add Watchlist to Collection Actions
 */
export class AddWatchlistAction implements Action {
  type = ActionTypes.ADD_WATCHLIST;

  constructor(public payload: Watchlist) { }
}

export class AddWatchlistSuccessAction implements Action {
  type = ActionTypes.ADD_WATCHLIST_SUCCESS;

  constructor(public payload: Watchlist) { }
}

export class AddWatchlistFailAction implements Action {
  type = ActionTypes.ADD_WATCHLIST_FAIL;

  constructor(public payload: Watchlist) { }
}


/**
 * Remove Watchlist from Collection Actions
 */
export class RemoveWatchlistAction implements Action {
  type = ActionTypes.REMOVE_WATCHLIST;

  constructor(public payload: Watchlist) { }
}

export class RemoveWatchlistSuccessAction implements Action {
  type = ActionTypes.REMOVE_WATCHLIST_SUCCESS;

  constructor(public payload: Watchlist) { }
}

export class RemoveWatchlistFailAction implements Action {
  type = ActionTypes.REMOVE_WATCHLIST_FAIL;

  constructor(public payload: Watchlist) { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Watchlist[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddWatchlistAction
  | AddWatchlistSuccessAction
  | AddWatchlistFailAction
  | RemoveWatchlistAction
  | RemoveWatchlistSuccessAction
  | RemoveWatchlistFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
