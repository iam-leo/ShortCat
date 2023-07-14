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
    this.processURL = false;

    this._shortUrlService.getUrlShort(this.nombreURL)
      .subscribe(data => {
        this.shortURL = this._shortUrlService.shortURLBase + data[0].code;
        this.processURL = true;
        console.log(this.shortURL);        
      });
  }
}
