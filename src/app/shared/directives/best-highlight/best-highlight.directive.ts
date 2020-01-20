import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective implements OnInit {
  defaultColor: string = 'transparent';
  @Input('appBestHighlight') highlightColor: string = 'lightGrey';
  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.backgroundColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }




}
