import { WatchlistsModel } from '../models/watch-lists.model';
import * as  watchlistActions from '../Actions/watch-lists.actions';


export interface IState {
  ids: string[];
  entities: { [id: string]: WatchlistsModel };
  selectedBookId: string | null;
};

const initialState: IState = {
  ids: [],
  entities: {},
  selectedBookId: null
};

export function reducer(state = initialState, action: watchlistActions.Actions) {

  switch (action.type) {
    case watchlistActions.ActionTypes.LOAD: {
      console.log('Load watchlists');
    }

    default: {
      console.log('default');
    } 
  }
}