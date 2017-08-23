import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar.component';
import {FormsModule} from '@angular/forms';
import {WeatherService} from './services/search.service';
import {HttpModule} from '@angular/http';
import { WeatherlistComponent } from './components/weatherlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    WeatherlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
