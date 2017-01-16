import { IWatchlistModel } from '../models/watch-lists.model';
import * as  watchlistCollectionActions from '../Actions/watch-list-collection.actions';


export interface IState {
  loaded: boolean;
  ids: string[];
};

const initialState: IState = {
  loaded: false,
  ids: []
};

export function reducer(state = initialState, action: watchlistCollectionActions.Actions): IState {

  switch (action.type) {
    case watchlistCollectionActions.ActionTypes.LOAD: {
      const watchlists = action.payload;

      return Object.assign({}, state,{
          loaded: true,
          ids: watchlists.map(item => item.id)
        });
    }

    case watchlistCollectionActions.ActionTypes.ADD: {
      const watchlist = action.payload[0]; //NB: Workaround for common type error

      if (state.ids.indexOf(watchlist.id) > -1) {
        return state;
      }
      
      return Object.assign({}, state, {
        ids: [...state.ids, watchlist.id]
      });
    }

    default: {
      return {
        loaded: true,
        ids: []
      };
      // console.log('default');
    }
  }
}

export const getLoad = (state: IState) => state.loaded;
export const getIds = (state: IState) => state.ids;