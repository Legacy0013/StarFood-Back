import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'starfood-back';
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout().subscribe(() => {
      this.router.navigateByUrl('/login');
    }, () => {
      alert('ko');
    }
    )
   }

}
