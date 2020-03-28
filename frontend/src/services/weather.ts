import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../models/credential';

 
@Injectable()
export class WeatherService {
    private openWeatherMap_url: string = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?';
    private openWeatherMap_key: string = 'YOUR_API_KEY';
    constructor (
        private http: HttpClient
    ) {

    }
    public getWeather(location) {
        return this.http.get(`${this.openWeatherMap_url}lat=${location.lat}&lon=${location.lng}&APPID=${this.openWeatherMap_key}&units=metric`);
    }
}