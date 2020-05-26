import { AuthService } from "./../user/shared/auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styles: [
    `
      li > a.router-link-active {
        color: #f97924;
      }
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `,
  ],
})
export class NavBarComponent {
  constructor(public auth: AuthService) {}
}
