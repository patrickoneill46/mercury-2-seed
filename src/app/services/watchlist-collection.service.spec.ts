/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { Store } from '@ngrx/store';
import { WatchlistCollectionService } from './watchlist-collection.service';
import * as watchlistActions from '../actions/watchlist-collection.actions';

describe('Service: WatchlistCollection', () => {

  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WatchlistCollectionService,
        {
          provide: Store,
          useClass: class { dispatch = jasmine.createSpy('dispatch') }
        }
      ]
    });
    service = getTestBed().get(WatchlistCollectionService);
  });

  it('should add watchlist', () => {
    service.addWatchlist('my watchlist');
    expect(service.store.dispatch).toHaveBeenCalledWith(jasmine.any(watchlistActions.AddWatchlistAction));
  });

  it('should remove watchlist', () => {
    service.removeWatchlist('someID');
    expect(service.store.dispatch).toHaveBeenCalledWith(jasmine.any(watchlistActions.RemoveWatchlistAction));
  });

});