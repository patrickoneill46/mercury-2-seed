import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WatchlistCollectionComponent } from './watchlist-collection.component';
import { LayoutComponent } from './layout';

import { PipesModule } from '../pipes';

export const COMPONENTS = [
  WatchlistCollectionComponent,
  LayoutComponent
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }