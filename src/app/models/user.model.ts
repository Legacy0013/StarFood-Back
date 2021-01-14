import {Role} from './role.model';

export class User {

  userId: number;
  userFirstname: string;
  userLastname: string;
  userEmail: string;
  userPhone: string;
  roleId: number;
  statusId: number;
  userPassword: string;
  role: Role;
}
