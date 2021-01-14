import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '../../models/location.model';
import { LocationService } from '../../services/location.service';

@Component({
  templateUrl: './add-location.component.html'
})
export class AddLocationComponent {

  location: Location = new Location();

  constructor(private router: Router, private locationService: LocationService) {

  }

  createLocation(): void {
    this.locationService.createLocation(this.location)
      .subscribe( data => {
        // alert('location created successfully.');
        this.gotoLocationList();
      });

  }

  gotoLocationList() {
    this.router.navigateByUrl('/locations');
  }
}
