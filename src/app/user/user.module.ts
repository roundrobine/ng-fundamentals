import { userRoutes } from "./user.routes";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
})
export class UserModule {}
