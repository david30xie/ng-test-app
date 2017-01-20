import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PasteListComponent } from './paste-list';
import { PasteViewComponent } from './paste-view';

const routes: Routes = [
  { path: '', redirectTo: '/pastes', pathMatch: 'full' },
  { path: 'pastes/:hashId', component: PasteViewComponent },
  { path: 'pastes', component: PasteListComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
