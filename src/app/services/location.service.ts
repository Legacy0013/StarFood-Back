import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Location} from '../models/location.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LocationService {

  constructor(private http: HttpClient) {}

  private locationUrl = 'http://localhost:8080/starfood/locations';

  public getLocations() {
    return this.http.get<Location[]>(this.locationUrl);
  }

  public deleteLocation(location) {
    return this.http.delete(this.locationUrl + '/' + location.locationId);
  }
  public updateLocation(location) {
    return this.http.put(this.locationUrl, location);
  }

  public createLocation(location) {
    return this.http.post<Location>(this.locationUrl, location);
  }

}
