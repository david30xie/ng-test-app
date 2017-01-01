import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// import { slideInDownAnimation } from '../animations';

import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  templateUrl: './comment-view.component.html',
  // styleUrls: ['./comment-view.component.css'],
  // animations: [ slideInDownAnimation ]
})

export class CommentViewComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

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
