import { RouterModule, Routes } from "@angular/router";
import { SearchViewComponent } from "./search-view/search-view.component";
import { NgModule } from "@angular/core";
import { InfoViewComponent } from "./info-view/info-view.component";
import { PanzoomPlaneComponent } from "./panzoom-plane/panzoom-plane.component";

const routes: Routes = [
  { path: "search",   component: SearchViewComponent },
  { path: "info/:id", component: InfoViewComponent },
  { path: "workspace/:id", component: PanzoomPlaneComponent },

  { path: '**', redirectTo: 'search' }
];

@NgModule({
  providers: [  ],
  imports: [ 
    RouterModule.forRoot(routes),
    PanzoomPlaneComponent,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

