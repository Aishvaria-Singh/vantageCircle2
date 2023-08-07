import { Component } from '@angular/core';

@Component({
  selector: 'app-hightlight-number',
  templateUrl: './hightlight-number.component.html',
  styleUrls: ['./hightlight-number.component.css']
})
export class HightlightNumberComponent {
  inputText: string = '';
  highlightedText: string = '';

  highlightNumbers() {
    this.highlightedText = this.inputText;
  }
}
