import { Component, Input, OnChanges } from '@angular/core';
import { Watchlist } from '../models/watchlist.model';

@Component({
  selector: 'watchlist-collection',
  template: `
    watchlist
<ul>
    <li *ngFor="let item of watchlist">{{item.watchlistName}}</li>
</ul>
 {{watchlist | json }}
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})
export class WatchlistCollectionComponent {
  @Input() watchlist: Watchlist[];


  constructor() {
    console.log(this.watchlist);
  }

}
