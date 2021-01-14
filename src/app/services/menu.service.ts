import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Menu} from '../models/menu.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) {}

  private menuUrl = 'http://localhost:8080/starfood/menus';

  public getMenus() {
    return this.http.get<Menu[]>(this.menuUrl);
  }

  public deleteMenu(menu) {
    return this.http.delete(this.menuUrl + '/' + menu.menuId);
  }
  public updateMenu(menu) {
    return this.http.put(this.menuUrl, menu);
  }

  public createMenu(menu) {
    return this.http.post<Menu>(this.menuUrl, menu);
  }

}
