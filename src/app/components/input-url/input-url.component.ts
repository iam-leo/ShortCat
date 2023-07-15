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
  loading = false;

  constructor(private _shortUrlService: ShorturlService){ }

  procesarURL(){
    //Ocultamos alguna url que haya quedado previo
    this.processURL = false;

    //Activamos el Spinner
    this.loading = true;

    //Hacemos la petición a la Api
    setTimeout(() => {
      this.getURL();      
    }, 2000);
  }

  getURL(){
    this._shortUrlService.getUrlShort(this.nombreURL)
      .subscribe(data => {
        //Desactivamos el Spinner
        this.loading = false;
        this.shortURL = this._shortUrlService.shortURLBase + data[0].code;
        this.processURL = true;
        console.log(this.shortURL);        
      });
  }
}
