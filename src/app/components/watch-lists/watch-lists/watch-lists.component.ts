import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';

import { WatchlistCollectionService } from '../../../services/watch-list.service';

@Component({
  selector: 'app-watch-lists',
  templateUrl: './watch-lists.component.html',
  styleUrls: ['./watch-lists.component.css']
})
export class WatchListsComponent implements OnInit {

  constructor(private watchlistCollectionService: WatchlistCollectionService) {
    console.log(this.watchlistCollectionService.watchlistCollection$);
    //this.watchlistCollectionService.watchlistCollection;
  }

  get watchLists() {
   // console.log(this.watchlistCollectionService.watchlistCollection, this.watchlistCollectionService.watchlistCollection$);
    return this.watchlistCollectionService.watchlistCollection;
  }

  set watchLists({}) {
     this.watchlistCollectionService.addWatchList({id:12313, name: 'someName', markets: [1, 2, 3, 4, 5] });
  }

  ngOnInit() {
    //this.store.dispatch();
  }

}
