import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './observable/custom/custom.component';
import { FromEventComponent } from './observable/FromEvent/FromEvent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/ofFrom/ofFrom.component';
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
  MapComponent
];
