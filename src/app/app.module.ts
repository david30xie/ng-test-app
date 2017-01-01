import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentViewComponent } from './comment-view/comment-view.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';

import { CommentService } from './comment.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentViewComponent,
    CommentCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ CommentService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
