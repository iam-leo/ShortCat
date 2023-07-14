import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { InputUrlComponent } from './components/input-url/input-url.component';
import { ShortUrlComponent } from './components/input-url/short-url/short-url.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUrlComponent,
    ShortUrlComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
