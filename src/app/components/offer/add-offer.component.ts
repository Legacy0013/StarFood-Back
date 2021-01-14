import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offer.service';

@Component({
  templateUrl: './add-offer.component.html'
})
export class AddOfferComponent {

  offer: Offer = new Offer();

  constructor(private router: Router, private offerService: OfferService) {

  }

  createOffer(): void {
    this.offerService.createOffer(this.offer)
      .subscribe( data => {
        // alert('offer created successfully.');
        this.gotoOfferList();
      });

  }

  gotoOfferList() {
    this.router.navigateByUrl('/offers');
  }
}
