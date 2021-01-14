import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Role } from '../../models/role.model';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styles: []
})
export class RoleComponent implements OnInit {

  roles: Role[];

  constructor(private router: Router, private roleService: RoleService) {

  }

  ngOnInit() {
    this.roleService.getRoles()
      .subscribe( data => {
        this.roles = data;
      });
  };

  deleteRole(role: Role): void {
    this.roleService.deleteRole(role)
      .subscribe( data => {
        this.roles = this.roles.filter(u => u !== role);
      })
  };

  updateRole(role: Role): void {
    this.roleService.updateRole(role)
      .subscribe( data => {
        this.roles = this.roles.filter(u => u !== role);
      })
  };

}
