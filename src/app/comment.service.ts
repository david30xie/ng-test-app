import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comment } from './comment';

@Injectable()
export class CommentService {
  private commentsUrl = 'http://127.0.0.1:3000/api/comments';

  constructor(private http: Http) { }

  // private headers = new Headers({'Content-Type': 'application/json',
  //                                'Access-Control-Allow-Origin': '*'});

  getAllComments(): Promise<Comment[]> {
    return this.http.get(this.commentsUrl)
               .toPromise()
               .then(response => response.json() as Comment[])
               .catch(this.handleError);
  }

  getCommentById(commentId: number): Promise<Comment> {
    return this.http.get(this.commentsUrl + '/' + commentId)
               .toPromise()
               .then(response => response.json() as Comment)
               .catch(this.handleError);
  }

  createComment(model: Comment): Promise<Comment> {
    return this.http.post(this.commentsUrl, model)
               .toPromise()
               .then(response => response.json() as Comment)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
