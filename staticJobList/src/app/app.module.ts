import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavFilterComponent } from './components/nav-filter/nav-filter.component';
import { BtnBaseComponent } from './components/btn-base/btn-base.component';
import { CardJobComponent } from './components/card-job/card-job.component';
import { SpecialTagComponent } from './components/special-tag/special-tag.component';
import { GalleryJobComponent } from './components/gallery-job/gallery-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavFilterComponent,
    BtnBaseComponent,
    CardJobComponent,
    SpecialTagComponent,
    GalleryJobComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
