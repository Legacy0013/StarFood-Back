import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Role } from '../../models/role.model';
import { RoleService } from '../../services/role.service';

@Component({
  templateUrl: './add-role.component.html'
})
export class AddRoleComponent {

  role: Role = new Role();

  constructor(private router: Router, private roleService: RoleService) {

  }

  createRole(): void {
    this.roleService.createRole(this.role)
      .subscribe( data => {
        // alert('role created successfully.');
        this.gotoRoleList();
      });

  }

  gotoRoleList() {
    this.router.navigateByUrl('/roles');
  }
}
