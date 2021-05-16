import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './observable/custom/custom.component';
import { DebounceTimeComponent } from './observable/debounceTime/debounceTime.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/FromEvent/FromEvent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/ofFrom/ofFrom.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { RetryComponent } from './observable/retry/retry.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/ToArray/ToArray.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: "", component: PromiseComponent },
  { path: "promise", component: PromiseComponent },
  {
    path: "observable", component: ObservableComponent, children: [
      { path: "", component: ObservableComponent },
      { path: "FromEvent", component: FromEventComponent },
      { path: "Interval", component: IntervalComponent },
      { path: "OfFrom", component: OfFromComponent },
      { path: "ToArray", component: ToArrayComponent },
      { path: "Custom", component: CustomComponent },
      { path: "Map", component: MapComponent },
      { path: "Pluck", component: PluckComponent },
      { path: "Filter", component: FilterComponent },
      { path: "Tap", component: TapComponent },
      { path: "Take", component: TakeComponent },
      { path: "Retry", component: RetryComponent },
      { path: "DebounceTime", component: DebounceTimeComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const RoutingComponents = [
  PromiseComponent,
  ObservableComponent,
  FromEventComponent,
  IntervalComponent,
  OfFromComponent,
  ToArrayComponent,
  CustomComponent,
  MapComponent,
  PluckComponent,
  FilterComponent,
  TapComponent,
  TakeComponent,
  RetryComponent,
  DebounceTimeComponent
];
