import { Directive,Input,ElementRef } from '@angular/core';

@Directive({
  selector: "[appLcstyle]"
})
export class LcstyleDirective {
  @Input() appLcstyle;
  constructor(public ref: ElementRef) {
    // console.log(123);
  }
  ngOnChanges() {
    // console.log("指令", this.appLcstyle);
    console.log(this.ref.nativeElement);

    this.ref.nativeElement.className = this.appLcstyle
  }
}
