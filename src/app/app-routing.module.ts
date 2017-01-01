import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentViewComponent } from './comment-view/comment-view.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/comments', pathMatch: 'full' },
  { path: 'comments', component: CommentListComponent },
  { path: 'comments/create', component: CommentCreateComponent },
  { path: 'comments/:commentId', component: CommentViewComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
