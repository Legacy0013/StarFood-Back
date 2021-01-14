import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logout(): any {
    throw new Error('Ca pas marche !');
  }
//  2B3
}
