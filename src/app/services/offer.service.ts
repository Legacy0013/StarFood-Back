import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Offer} from '../models/offer.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OfferService {

  constructor(private http: HttpClient) {}

  private offerUrl = 'http://localhost:8080/starfood/offers';

  public getOffers() {
    return this.http.get<Offer[]>(this.offerUrl);
  }

  public deleteOffer(offer) {
    return this.http.delete(this.offerUrl + '/' + offer.offerId);
  }
  public updateOffer(offer) {
    return this.http.put(this.offerUrl, offer);
  }

  public createOffer(offer) {
    return this.http.post<Offer>(this.offerUrl, offer);
  }

}
