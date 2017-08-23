import {Http} from '@angular/http';
import {EventEmitter, Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Injectable()
export class WeatherService {

  public searchResults: EventEmitter<SearchResult[]> = new EventEmitter();

  constructor(private http: Http, private sanitiser: DomSanitizer) {}

  getWeather(cityName: string) {
    this.http.get(environment.apiUrl + 'weather', {params: {
      APPID: environment.apiKey,
      q: cityName
    }}).subscribe((response) => {
      const data = response.json();

      const array: any[] = data.weather;

      const results: SearchResult[] = [];


      const mapsEmbedSafely: () => SafeUrl = () => {
        const src = `${environment.mapsApiEmbed}view?key=${environment.mapsApiKey}&center=${data.coord.lat},${data.coord.lon}&zoom=10`;
        //console.log(src);
        return this.sanitiser.bypassSecurityTrustResourceUrl(src);
      }

      array.forEach((obj) => results.push({
        city: data.name,
        country: data.sys.country,
        main: obj.main,
        description: obj.description,
        iconUrl: `${environment.apiIconUrl}${obj.icon}.png`,
        mapSrc: mapsEmbedSafely
      }));

      this.searchResults.emit(results);
    });
  }
}


export interface SearchResult {
  city: string;
  country: string;
  main: string;
  description: string;
  iconUrl: string;
  mapSrc: () => SafeUrl;
}
