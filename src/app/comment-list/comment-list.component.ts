import { Component, OnInit } from '@angular/core';

import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getAllComments()
    .then(comments => {
      this.comments = comments;
    });
  }
}
