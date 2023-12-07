import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {
  @HostListener('window:keydown', ['$event']) onKeyPress(event: KeyboardEvent) {
    console.log(event.keyCode);
    switch (event.keyCode) {
      case 40:
        this.changeColor("red");
        break;
      case 39:
        this.changeColor("green");

        break;
      case 38:
        this.changeColor("grey");

        break;
      case 37:
        this.changeColor("yellow");
        break;
      default:
        break;
    }
  }
  constructor(private element : ElementRef) {
  }
  public changeColor(color: string) {
    console.log('run changeColor function');
    this.element.nativeElement.style.color = color;
  }
}
