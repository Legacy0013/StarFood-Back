import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  menus: Menu[];

  constructor(private router: Router, private menuService: MenuService) {

  }

  ngOnInit() {
    this.menuService.getMenus()
      .subscribe( data => {
        this.menus = data;
      });
  };

  deleteMenu(menu: Menu): void {
    this.menuService.deleteMenu(menu)
      .subscribe( data => {
        this.menus = this.menus.filter(u => u !== menu);
      })
  };

  updateMenu(menu: Menu): void {
    this.menuService.updateMenu(menu)
      .subscribe( data => {
        this.menus = this.menus.filter(u => u !== menu);
      })
  };

}
