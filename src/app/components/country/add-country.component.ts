import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  templateUrl: './add-country.component.html'
})
export class AddCountryComponent {

  country: Country = new Country();

  constructor(private router: Router, private countryService: CountryService) {

  }

  createCountry(): void {
    this.countryService.createCountry(this.country)
      .subscribe( data => {
        // alert('country created successfully.');
        this.gotoCountryList();
      });

  }

  gotoCountryList() {
    this.router.navigateByUrl('/countries');
  }
}
