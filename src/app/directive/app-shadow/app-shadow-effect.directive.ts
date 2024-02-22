import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[AppShadowEffect]',
})
export class AppShadowEffectDirective {
  @Input() shadowColor: string = '#FFAE00';
  @Input() shadowSize: string = '0 20px 40px 0';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.addShadow();
  }

  private addShadow() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      `0 0 ${this.shadowSize} ${this.shadowColor}`
    );
  }
}
