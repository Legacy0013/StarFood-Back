import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '../../models/location.model';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styles: []
})
export class LocationComponent implements OnInit {

  locations: Location[];

  constructor(private router: Router, private locationService: LocationService) {

  }

  ngOnInit() {
    this.locationService.getLocations()
      .subscribe( data => {
        this.locations = data;
      });
  };

  deleteLocation(location: Location): void {
    this.locationService.deleteLocation(location)
      .subscribe( data => {
        this.locations = this.locations.filter(u => u !== location);
      })
  };

  updateLocation(location: Location): void {
    this.locationService.updateLocation(location)
      .subscribe( data => {
        this.locations = this.locations.filter(u => u !== location);
      })
  };

}
