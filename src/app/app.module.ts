import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { WatchListsComponent } from './components/watch-lists/watch-lists/watch-lists.component';
import { WatchlistCollectionService } from './services/watch-list.service';
import { reducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    WatchListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /**
 * StoreModule.provideStore is imported once in the root module, accepting a reducer
 * function or object map of reducer functions. If passed an object of
 * reducers, combineReducers will be run creating your application
 * meta-reducer. This returns all providers for an @ngrx/store
 * based application.
 */
    StoreModule.provideStore({
      watchlists: reducer
    })
  ],
  providers: [
    WatchlistCollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
