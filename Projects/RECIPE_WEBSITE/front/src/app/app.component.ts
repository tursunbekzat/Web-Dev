import { Component, OnInit } from '@angular/core';
import { PublicService } from "./services/public.service";
import { AuthService } from "./services/auth.service";

// import {constructor} from "jasmine";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant';
  msg: any
  constructor(private pService: PublicService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.showMessage();
  }

  showMessage() {
    this.pService.getMessage().subscribe(data => {
      this.msg = data,
        console.log(this.msg)
    });
  }

  logout() {
    this.authService.logout();
  }

}
