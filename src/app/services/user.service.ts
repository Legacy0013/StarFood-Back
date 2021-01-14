import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import {RoleService} from './role.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private userUrl = 'http://localhost:8080/starfood/users';
  private roleService: RoleService;

  public getUsers() {

    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + '/' + user.userId);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

  public roleList() {
    return this.roleService.getRoles();
  }

}
