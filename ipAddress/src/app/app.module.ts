import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {  FormsModule  } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { SearchBarComponent } from './components/header/components/search-bar/search-bar.component';
import { BoxLocationComponent } from './components/header/components/box-location/box-location.component';
import { ExamplesBoardComponent } from './components/examples-board/examples-board.component';
import { AccordionComponent } from './components/examples-board/component/accordion/accordion.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    SearchBarComponent,
    BoxLocationComponent,
    ExamplesBoardComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
