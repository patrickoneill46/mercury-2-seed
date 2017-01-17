import { createSelector } from 'reselect';
import * as collection from '../actions/watchlist-collection.actions';


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
  list: any[];
};

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
  list: []
};

export function reducer(state = initialState, action: collection.Actions): State {
  switch (action.type) {
    case collection.ActionTypes.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }


    case collection.ActionTypes.LOAD_SUCCESS: {
      const watchlists = action.payload;
      console.log(action);
      return {
        loaded: true,
        loading: false,
        ids: watchlists.map(watchlist => watchlist.id),
        list: watchlists
      }
    }

    case collection.ActionTypes.ADD_WATCHLIST: { // NB look in to effects
      console.log(action, 'PAYLOAD');
      const watchlist = action.payload;

      if (state.ids.indexOf(watchlist.id) > -1) {
        return state;
      }
      console.log(state.ids, state, 'STATE IDS');
      return Object.assign({}, state, {
        ids: [...state.ids, watchlist.id],
        list: [...state.list, watchlist]
      });
    }

    case collection.ActionTypes.ADD_WATCHLIST_SUCCESS:
    case collection.ActionTypes.REMOVE_WATCHLIST_FAIL: {
      const watchlist = action.payload;
      if (state.ids.indexOf(watchlist.id as string) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [...state.ids, watchlist.id],
        watchlist: [...state.list, watchlist]
      });
    }

    case collection.ActionTypes.REMOVE_WATCHLIST_SUCCESS:
    case collection.ActionTypes.ADD_WATCHLIST_FAIL: {
      const watchlist = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== watchlist.id),
        list: state.list.filter(item => item.id !== watchlist.id)
      });
    }

    default: {
      return state;
    }
  }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;

export const getList = (state: State) => state.list;