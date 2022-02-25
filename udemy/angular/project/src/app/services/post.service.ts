import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  constructor (http: HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts', http);
    }
  //   getPosts(){
  //     return this.http.get(this.url).pipe(catchError(this.handleError));
  // }
  // createPost(post:any){
  //   return this.http.post(this.url,JSON.stringify(post)).pipe(catchError(this.handleError));
  // }

  // updatePost(post:any){
  //   return this.http.patch(this.url + '/' + post.id,JSON.stringify({isRead:true}))
  //   .pipe(catchError(this.handleError));
    
  // }

  // deletePost(id:any){
  //   return this.http.delete(this.url + '/' + id).pipe(
  //     catchError(this.handleError)
  // )}

  // private handleError(error:Response){
  //   if (error.status === 404) {
  //     return throwError(new NotFoundError());
  //   }
  //   if (error.status === 400){
  //     return throwError(new BadInput());
  //   }
  //   return throwError(new AppError(error));
  //   }
}


