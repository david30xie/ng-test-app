import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {
  comment: Comment;

  constructor(private commentService: CommentService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.commentService.getCommentById(+params['commentId']))
      .subscribe((comment: Comment) => this.comment = comment);
  }
}
