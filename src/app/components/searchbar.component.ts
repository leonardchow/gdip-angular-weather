import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {WeatherService} from '../services/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('searchText') searchText: NgModel;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  submitted() {
    if (this.searchText.invalid) {
      return;
    }

    const city: string = this.searchText.value;
    console.log(city);
    this.weatherService.getWeather(city);
  }

}
