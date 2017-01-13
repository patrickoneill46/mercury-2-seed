import { IWatchlistModel } from '../models/watch-lists.model';
import * as  watchlistCollectionActions from '../Actions/watch-list-collection.actions';


export interface IState {
  ids: string[];
  entities: { [id: string]: IWatchlistModel };
};

const initialState: IState = {
  ids: [],
  entities: {}
};

export function reducer(state = initialState, action: watchlistCollectionActions.Actions) {

  switch (action.type) {
    case watchlistCollectionActions.ActionTypes.LOAD: {
      const watchlists = action.payload;

      return Object.assign({}, state,{
          loaded: true,
          ids: watchlists.map((items) => { return items.id; })
        });
    }

    case watchlistCollectionActions.ActionTypes.ADD: {
      const watchlist = action.payload;

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