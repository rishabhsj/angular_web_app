import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
isLiked = false;
counter = 0;
  constructor() { }

  likeClicked(){
    if(this.isLiked){
      this.counter--;
      this.isLiked = !this.isLiked;
    }
    else{
      this.counter++;
      this.isLiked = !this.isLiked;
    }
  }

  ngOnInit(): void {
  }

}
