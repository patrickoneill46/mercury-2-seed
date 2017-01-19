import * as fromWatchlistCollection from './watchlist-collection.reducer';
import * as watchlistCollectionActions from '../actions/watchlist-collection.actions';
import { Watchlist } from '../models/watchlist.model';

describe('Reducer: WatchlistCollection', () => {

  describe('Reducer: WatchlistCollection: Initial', () => {

    it('should use initial state', () => {
      let watchlistObj: Watchlist = {
        id: 'someId',
        watchlistName: 'market 1',
        markets: 'markets list'
      };

      let result = fromWatchlistCollection.reducer(undefined, new watchlistCollectionActions.AddWatchlistSuccessAction(watchlistObj));
      expect(result.list[0]).toEqual(watchlistObj);

    });

  });

  describe('Reducer: WatchlistCollection - state changes', () => {
    let initialResult;
    let initialObj: Watchlist;

    beforeEach(() => {
       initialObj = {
        id: 'someId',
        watchlistName: 'market 1',
        markets: 'markets list'
      };

       initialResult = fromWatchlistCollection.reducer(undefined, new watchlistCollectionActions.AddWatchlistSuccessAction(initialObj));
    });

    it('should should not add duplicate watchlist', () => {
      let newOj = {
        id: 'someId',
        watchlistName: 'market 1',
        markets: 'markets list'
      };

      let newResult = fromWatchlistCollection.reducer(initialResult, new watchlistCollectionActions.AddWatchlistSuccessAction(newOj));
      expect(newResult.list.length).toBe(1);
      expect(newResult.list[0]).toEqual(initialObj);

    });

    it('should should not add new watchlist', () => {
      let newOj: Watchlist = {
        id: 'anotherID',
        watchlistName: 'market another',
        markets: 'another watchlist'
      };

      let newResult = fromWatchlistCollection.reducer(initialResult, new watchlistCollectionActions.AddWatchlistSuccessAction(newOj));
      expect(newResult.list.length).toBe(2);
      expect(newResult.list[0]).toEqual(initialObj);
      expect(newResult.list[1]).toEqual(newOj);

    });  });});



