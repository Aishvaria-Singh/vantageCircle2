import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: string = '';
  highlightedText: string = '';

  highlightNumbers(): void {
    this.highlightedText = this.inputText;
  }
}
