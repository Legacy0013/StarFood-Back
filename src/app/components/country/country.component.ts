import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: []
})
export class CountryComponent implements OnInit {

  countries: Country[];

  constructor(private router: Router, private countryService: CountryService) {

  }

  ngOnInit() {
    this.countryService.getCountries()
      .subscribe( data => {
        this.countries = data;
      });
  };

  deleteCountry(country: Country): void {
    this.countryService.deleteCountry(country)
      .subscribe( data => {
        this.countries = this.countries.filter(u => u !== country);
      })
  };

  updateCountry(country: Country): void {
    this.countryService.updateCountry(country)
      .subscribe( data => {
        this.countries = this.countries.filter(u => u !== country);
      })
  };

}
