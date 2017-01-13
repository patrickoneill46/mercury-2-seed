import { IWatchlistsModel } from '../models/watch-lists.model';
import * as  watchlistActions from '../Actions/watch-lists.actions';


export interface IState {
  ids: string[];
  entities: { [id: string]: IWatchlistsModel };
};

const initialState: IState = {
  ids: [],
  entities: {}
};

export function reducer(state = initialState, action: watchlistActions.Actions) {

  switch (action.type) {
    case watchlistActions.ActionTypes.LOAD:
    {
      const watchlists = []; //action.payload;

      console.log('Load watchlists');
      return {
        loaded: true,
        ids: watchlists.map((items) => { return items.id; })
      };
    }

    default: {
      return;
     // console.log('default');
    }
  }
}