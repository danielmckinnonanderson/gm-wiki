import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  // { path: 'view/:id', }

  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

