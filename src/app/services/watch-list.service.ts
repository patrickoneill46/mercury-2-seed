'use strict';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as reducers from '../reducers/index';
import * as watchlistActions from '../Actions/watch-list-collection.actions';
import { IWatchlistModel } from '../models/watch-lists.model';
import {IState} from '../reducers/watch-list-collection.reducer';

interface IWatchlistCollectionService {
  watchlistCollection(): any;
  addWatchList(watchList: any): void;
}

/**
 * Create, save, delete and initialise watchlists
 * @method Injectable
 * @return {[type]}   [description]
 */
@Injectable()
export class WatchlistCollectionService implements IWatchlistCollectionService {

  watchlistCollection$: Observable<IWatchlistModel[]>;

  constructor(private store: Store<reducers.State>) {
   // this.watchlistCollection$ = this.watchlistCollection();
  }

  get watchlistCollection(): any {
    debugger;
    console.log(this.store.select('watchlists'), 'SELECT');
    return this.store.select('warchlists') as Observable<IState[]>;
  }

  addWatchList(watchList: any): void {
    this.store.dispatch(new watchlistActions.AddAction(watchList));
  }

}