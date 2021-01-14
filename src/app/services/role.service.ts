import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Role} from '../models/role.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RoleService {

  constructor(private http: HttpClient) {}

  private roleUrl = 'http://localhost:8080/starfood/roles';

  public getRoles() {
    return this.http.get<Role[]>(this.roleUrl);
  }

  public deleteRole(role) {
    return this.http.delete(this.roleUrl + '/' + role.roleId);
  }
  public updateRole(role) {
    return this.http.put(this.roleUrl, role);
  }

  public createRole(role) {
    return this.http.post<Role>(this.roleUrl, role);
  }

}
