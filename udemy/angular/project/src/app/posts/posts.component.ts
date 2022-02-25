import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:any;

  constructor(private service:PostService) {
    
   }

  ngOnInit(): void {
    // this.service.getPosts()
    this.service.getAll()
    .subscribe(response=>{
      this.posts=response;
    })
  }

  createPost(input: HTMLInputElement){
    let post:any = {title: input.value};
    input.value='';
    // this.service.createPost(post)
    this.service.create(post)
    .subscribe((newPost:any)=>{
      post.id = newPost.id;
      console.log(post.id);
      this.posts.splice(0,0,post);
    }, (error:AppError)=>{
      if(error instanceof BadInput){
        // this.form.setErrors(error)
      }
      else{
        throw error;
      }
    });
  }

  updatePost(post:any){
    
    // this.http.put(this.url,JSON.stringify(post));
    // this.service.updatePost(post)
    this.service.update(post)
    .subscribe(updatedPost=>{
      console.log(updatedPost);
    });
  }

  deletePost(post:any){
    // this.service.deletePost(post.id)
    this.service.delete(post.id)
    .subscribe(()=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    }, (error: AppError)=>{
      if(error instanceof NotFoundError){
        alert('This post has already been deleted');
      }
      else{
        throw error;
      }
    });
  }
}
