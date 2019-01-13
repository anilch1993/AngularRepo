import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RotateModule } from '@app/rot';
import { InInputModule } from '@my-Input';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RotateModule,
    InInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
