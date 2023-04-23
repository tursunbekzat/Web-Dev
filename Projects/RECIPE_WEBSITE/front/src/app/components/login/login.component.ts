import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage!: string;

  onSubmit() {
    // Here you can add code to send login credentials to a server
    // For example:
    // this.authService.login(this.username, this.password)
    //   .subscribe(
    //     data => console.log(data),
    //     error => this.errorMessage = error
    //   );
    
    // For this example, we'll just simulate a successful login
    if (this.username === 'user' && this.password === 'password') {
      alert('Login successful!');
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
