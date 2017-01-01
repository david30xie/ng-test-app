import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentViewComponent } from './comment-view/comment-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/comments', pathMatch: 'full' },
  { path: 'comments', component: CommentListComponent },
  { path: 'comments/:commentId', component: CommentViewComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
