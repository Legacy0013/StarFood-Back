import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Country} from '../models/country.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {}

  private countryUrl = 'http://localhost:8080/starfood/countries';

  public getCountries() {
    return this.http.get<Country[]>(this.countryUrl);
  }

  public deleteCountry(country) {
    return this.http.delete(this.countryUrl + '/' + country.countryId);
  }
  public updateCountry(country) {
    return this.http.put(this.countryUrl, country);
  }

  public createCountry(country) {
    return this.http.post<Country>(this.countryUrl, country);
  }

}
