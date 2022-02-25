import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
// @HostListener('focus') onFocus(){
//   console.log("On focus")
// }

  constructor(private el:ElementRef) { }
  // @Input('format') format : any;
  @Input('appInputFormat') format : any;
  @HostListener('blur') onBlur(){
    let value : string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
    this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
  }

}
