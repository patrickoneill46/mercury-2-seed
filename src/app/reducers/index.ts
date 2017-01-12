import * as fromWatchlists from './watch-lists.reducer';


const reducers = {
  watchlists: fromWatchlists.reducer
};


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  watchlists: fromWatchlists.IState
}