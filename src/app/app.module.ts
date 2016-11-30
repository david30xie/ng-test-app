import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentViewComponent } from './comment-view/comment-view.component';

import { CommentService } from './comment.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CommentService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
