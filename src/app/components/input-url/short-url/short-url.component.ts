import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {
  @Input() shortedURL: string = '';
  isCopied = false;

  copyToClipboard() {
    //Ocultamos cualquier notificación que haya quedado previa
    this.isCopied = false;
    navigator.clipboard.writeText(this.shortedURL)
      .then(() => {
        //Mostramos la notificación
        this.isCopied = true;

        //Ocultamos la notificación
        setTimeout(() => {
          this.isCopied = false;
        }, 2500);
      })
      .catch((error) => {
        console.error('Error al copiar el texto al portapapeles:', error);
        this.isCopied = false;
      });
  }
}