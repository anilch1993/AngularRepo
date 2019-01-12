import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RotateModule } from '@app/rot';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RotateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
