import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { Watchlist } from '../models/watchlist';
import { WatchlistCollectionService } from '../services/watchlist-collection.service';

@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>My Collection</md-card-title>
    </md-card>
    <button (click)="addWatchlist()"> add watchlist </button>
    <watchlist-collection [watchlist]="watchlist$ | async"></watchlist-collection >`
  ,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational 
   * components.
   */
  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class CollectionPageComponent {
  watchlist$: Observable<any[]>;

  constructor(private watchlistCollectionService: WatchlistCollectionService) {
    this.watchlist$ = this.watchlistCollectionService.getList();
  }

  updateWatchlist() {
    console.log('Update');
    this.watchlist$ = this.watchlistCollectionService.getList();
  }



  addWatchlist() {
    this.watchlistCollectionService.addWatchlist('watch list ' + Math.random().toString());
    this.updateWatchlist();
  }
}
