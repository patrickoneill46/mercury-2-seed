import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { Watchlist } from '../models/watchlist.model';
import * as watchlistActions from '../actions/watchlist-collection.actions';

@Injectable()
export class WatchlistCollectionService {

  constructor(private store: Store<fromRoot.State>) { }

  getList(): Observable<Watchlist[]> {
    return this.store.select(fromRoot.getWatchlistCollectionList);
  }

  addWatchlist(watchlistName: string) {
    console.log(watchlistName, 'UPDATE');
    const obj : Watchlist = {
      id: Math.random().toString(),
      watchlistName: watchlistName,
      markets: 'Market 1'
    }
    this.store.dispatch(new watchlistActions.AddWatchlistAction(obj));
  }

  removeWatchlist(watchlistId: string) {

    const obj: Watchlist = {
      id: watchlistId,
      watchlistName: 'Watchlist name',
      markets: 'Market 1'
    }
    this.store.dispatch(new watchlistActions.RemoveWatchlistAction(obj));

  }

}

