import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highlightNumber]'
})
export class HighlightNumberDirective implements OnChanges {
  @Input() text: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) { 
      const words = this.text.split(' ');

      // Clear the content of the host element
      this.el.nativeElement.innerHTML = '';

      words.forEach(word => {
        const span = this.renderer.createElement('span');
        this.renderer.setStyle(span, 'white-space', 'pre'); 
        if (!isNaN(Number(word)) && word.trim() !== '' && !/\d+[A-Za-z]/.test(word)) {
          this.renderer.setStyle(span, 'color', 'red');
        }
        this.renderer.appendChild(span, this.renderer.createText(word + ' '));
        this.renderer.appendChild(this.el.nativeElement, span);
      });
    }
  }
}
