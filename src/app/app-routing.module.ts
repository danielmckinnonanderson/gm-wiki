import { RouterModule, Routes } from "@angular/router";
import { SearchViewComponent } from "./search-view/search-view.component";
import { NgModule } from "@angular/core";
import { InfoViewComponent } from "./info-view/info-view.component";

const routes: Routes = [
  { path: "search",   component: SearchViewComponent },
  { path: "info/:id", component: InfoViewComponent },

  { path: '**', redirectTo: 'search' }
];

@NgModule({
  providers: [  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

