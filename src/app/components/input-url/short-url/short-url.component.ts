import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {
  @Input() shortedURL: string = '';

  constructor(){
    console.log(this.shortedURL);
    
  }
}
