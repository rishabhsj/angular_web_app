import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';


// interface FavouriteChangedEventArgs{
//   newValue:boolean;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task={
    title:'Review applications',
    assignee: {
      name: 'John Smith'
    }
  };
  viewMode = 'something else';
  post = {
  title : 'hello-world',
  isFavourite: false
  };
  canSave = true;
  // courses = [1,2];
  courses : any[] = [];
  onFavouriteChanged(eventArgs : FavouriteChangedEventArgs){
    console.log("Favourite component changed", eventArgs);
  }

  loadCourses(){
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ];
  }

  onAdd(){
    this.courses.push({id:4, name: 'course4'});
  }

  onRemove(course : any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  trackCourse(index : any,course:any){
    return course?course.id:undefined;
  }
}
