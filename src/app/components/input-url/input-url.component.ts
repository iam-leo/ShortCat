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
  showError = false;
  textError = ''

  constructor(private _shortUrlService: ShorturlService){ }

  procesarURL(){
    //Ocultamos alguna url que haya quedado previo
    this.processURL = false;

    //Validar input URL
    const isValid = this.validarInput(this.nombreURL);

    //Activamos el Spinner
    if(isValid){
      this.loading = true;
    }else{
      return
    }

    //Hacemos la petición a la Api
    setTimeout(() => {
      this.getURL();      
    }, 2000);
  }

  validarInput(url: string): boolean{
    if(url === ''){
      this.textError = 'Ingrese una URL';
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
      return false;
    }else{
      return true;
    }
  }

  getURL(){
    this._shortUrlService.getUrlShort(this.nombreURL)
      .subscribe({
        next: data => {          
          //Desactivamos el Spinner
          this.loading = false;
          if(data[0]){
            this.shortURL = this._shortUrlService.shortURLBase + data[0].code;
            this.processURL = true;
            console.log(this.shortURL);
          }else{
            this.textError = 'URL ingresada es inválida';
            this.showError = true;
            setTimeout(() => {
              this.showError = false;
            }, 3000);    
          }
        },
        error: error => {
            console.log(error);            
        }
      });
  }
}
