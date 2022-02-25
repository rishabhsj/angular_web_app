import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl : './favourite.component.html',
  // inputs: ['isFavourite']
  // styles: [
  //   `
  //   .glyphicon {
  //     color: green;
  //   }
  //   .glyphicon-star {
  //     background: black;
  //   }
  //   `
  // ],
  styleUrls: ['./favourite.component.css'],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Native
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent {
  // favourite : boolean = false;
  // isFavourite : boolean = true;
  // @Input() isFavourite : boolean = true;
  //alias in the input fieled
  @Input('isFavourite') isSelected : boolean = true;
  @Output('change') click = new EventEmitter();



  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

  

//   isFavourite(){
//     (this.favourite ? this.favourite=false : this.favourite=true);
//   }
}
export interface FavouriteChangedEventArgs{
  newValue:boolean;
}
