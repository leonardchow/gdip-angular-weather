import { Component, OnInit, OnDestroy } from '@angular/core';
import {SearchResult, WeatherService} from '../services/search.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})
export class WeatherlistComponent implements OnInit, OnDestroy {

  cityData: SearchResult;
  datapoints: SearchResult[] = [];

  private weatherSub: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherSub = this.weatherService.searchResults.subscribe((results: SearchResult[]) => {
      this.datapoints = results;
      if (results.length > 0) {
        this.cityData = results[0];
      }
    },
    (error) => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.weatherSub.unsubscribe();
  }

}
