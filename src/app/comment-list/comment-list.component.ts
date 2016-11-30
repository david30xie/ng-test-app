import { Component, OnInit } from '@angular/core';

import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {
  comments: Comment[];

  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.commentService.getAllComments().then(comments => this.comments = comments);
  }
}
