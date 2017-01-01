import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})

export class CommentCreateComponent implements OnInit {
  title: "Create a new comment";

  comment = new Comment();

  submitted = false;

  onSubmit() {
    this.commentService.createComment(this.comment)
      .then(comment => this.router.navigate(['/comments', comment.id]));
  }

  constructor(private commentService: CommentService,
              private router: Router) { }

  ngOnInit() {
  }
}
