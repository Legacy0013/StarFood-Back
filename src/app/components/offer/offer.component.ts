import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styles: []
})
export class OfferComponent implements OnInit {

  offers: Offer[];

  constructor(private router: Router, private offerService: OfferService) {

  }

  ngOnInit() {
    this.offerService.getOffers()
      .subscribe( data => {
        this.offers = data;
      });
  };

  deleteOffer(offer: Offer): void {
    this.offerService.deleteOffer(offer)
      .subscribe( data => {
        this.offers = this.offers.filter(u => u !== offer);
      })
  };

  updateOffer(offer: Offer): void {
    this.offerService.updateOffer(offer)
      .subscribe( data => {
        this.offers = this.offers.filter(u => u !== offer);
      })
  };

}
