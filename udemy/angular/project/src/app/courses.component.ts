import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', //
    template: `
    {{ text | summary:10 }}<br><br>
    {{ course. title | uppercase | lowercase}} <br>
    {{ course.students | number }} <br>
    {{ course.rating | number:'2.1-1' }} <br>
    {{ course.price | currency: 'AUD' : true : '3.2-2' }} <br>
    {{ course.releaseDate | date:'shortDate' }} <br><br>
    <!-- <input (keyup)="onKeyUp($event)" /> -->
    <!--  <input (keyup.enter)="onKeyUp()" /> -->
    <!--  <input (keyup.enter)="onKeyUp($event)" /> -->
    <!--  <input #email (keyup.enter)="onKeyUp(email.value)" /> -->
    <!-- <input [value]="email" (keyup.enter)="onKeyUp()" /> -->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <div (click)="onDivClicked()">
    <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive? 'blue' : 'white'">Save</button>
    </div>
    <h2>{{ "Title: " + title }}</h2>
    <img src="{{ imageUrl }}" />
    <br>
    <img [src]="imageUrl" />
    <table>
    <tr>
    <td [attr.colspan]="colSpan"></td>
    </tr>
    </table>
   <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul> 
    `
})

export class CoursesComponent{
    
    isActive=true;
    title = "List of courses";
    text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus nisl ac libero aliquam ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat mattis luctus. Integer mattis neque non elit tincidunt, ac malesuada dolor lobortis. Vestibulum rhoncus lacus orci, vel mollis nibh fringilla at. In elementum metus a erat rutrum facilisis. Duis sodales nisi vel orci consectetur, eget malesuada diam molestie. Duis purus nibh, blandit ac nisl sit amet, molestie lacinia orci. Aliquam malesuada enim eros, id malesuada dolor posuere laoreet. Etiam ac ullamcorper nunc, malesuada mattis nibh. Vivamus lectus libero, aliquet a quam a, maximus tristique risus. Sed porttitor arcu ex, at rutrum mauris rutrum id. Cras in vehicula lectus, vitae hendrerit nibh. Nunc facilisis aliquam sem, vitae convallis libero volutpat id. Fusce dolor arcu, efficitur at mi a, ultrices blandit tellus. Morbi lobortis orci diam, vel facilisis turpis gravida eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id tempor odio. Fusce neque ipsum, cursus a commodo sit amet, lacinia id mauris. Nullam vulputate, ligula laoreet consectetur accumsan, velit tellus euismod est, nec malesuada est orci ac dui. Proin orci ante, aliquam vel ex sed, pellentesque vestibulum urna. Mauris rutrum vitae leo vitae ornare. Mauris in felis eu sem condimentum vestibulum. Vestibulum interdum, orci cursus fermentum laoreet, justo tellus congue sapien, vitae convallis nulla ligula eu nulla. Praesent mollis sodales est, ut feugiat sem. Nulla facilisi. Vivamus eu tortor iaculis, euismod orci eget, blandit ligula. Sed risus dui, tempus ut velit et, euismod venenatis arcu.`
    course = {
        title : "The Complete Angular Course",
        rating : 4.97263,
        students: 15645,
        price: 190.95,
        releaseDate: new Date(2016,3,1)
    }
    
    imageUrl = "https://source.unsplash.com/random/400x200";
    courses;
    email = "me@example.com";
    colSpan=2;
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    onDivClicked(){
        console.log("Div was clicked");
    }
    onSave($event : any) {
        $event.stopPropagation();
        console.log("button was clicked");
    }
    // onKeyUp(){
    // onKeyUp($event : any){
    //     console.log($event.target.value);
    // }
    // onKeyUp(email : any){
    //     console.log(email);
    // }
    onKeyUp(){
        console.log(this.email);
    }
        
}