import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  login() {

    if (this.username === 'Akshay' && this.password === 'Akshay') {

      this.router.navigate(['/admin']);
    } else {

      alert('Invalid username or password. Please try again.');
    }
  }
}
