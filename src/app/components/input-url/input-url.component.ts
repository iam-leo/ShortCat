import { Component } from '@angular/core';
import { ShorturlService } from 'src/app/services/shorturl.service';

@Component({
  selector: 'app-input-url',
  templateUrl: './input-url.component.html',
  styleUrls: ['./input-url.component.css']
})
export class InputUrlComponent {
  nombreURL = '';
  shortURL = '';
  processURL = false;

  constructor(private _shortUrlService: ShorturlService){ }

  procesarURL(){
    this._shortUrlService.getUrlShort(this.nombreURL)
      .subscribe(data => {
        console.log(data);
        
      })
  }
}
