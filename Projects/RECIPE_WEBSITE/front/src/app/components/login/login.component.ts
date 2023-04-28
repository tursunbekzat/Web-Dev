import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { first } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.authService.login(this.f['username'].value, this.f['password'].value).pipe(first()).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }
}
