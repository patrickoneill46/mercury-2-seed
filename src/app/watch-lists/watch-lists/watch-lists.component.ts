import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as reducers from '../../reducers/index';
import * as watchlistActions from '../../Actions/watch-lists.actions';

@Component({
  selector: 'app-watch-lists',
  templateUrl: './watch-lists.component.html',
  styleUrls: ['./watch-lists.component.css']
})
export class WatchListsComponent implements OnInit {

  constructor(private store: Store<reducers.State>) {
   // this.store.select()
  }

  get watchLists() {
    return this
  }

  ngOnInit() {
    //this.store.dispatch();
  }

}
