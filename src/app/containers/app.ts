import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';


@Component({
  selector: 'mercury-two-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mercury-layout>
      <router-outlet></router-outlet>
    </mercury-layout>
  `
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>) {}
}
