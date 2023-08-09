import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavFilterComponent } from './components/nav-filter/nav-filter.component';
import { BtnBaseComponent } from './components/btn-base/btn-base.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavFilterComponent,
    BtnBaseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
