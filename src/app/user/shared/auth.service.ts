import { userRoutes } from "./../user.routes";
import { IUser } from "./model/user.model";
import { Injectable } from "@angular/core";
import { last } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser: IUser;
  constructor() {}

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: "John",
      lastName: "Papa",
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
