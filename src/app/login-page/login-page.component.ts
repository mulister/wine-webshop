import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    // Check credentials (replace with actual authentication logic)
    if (this.username === 'admin' && this.password === 'admin') {
      // Successful login, navigate to dashboard
      this.router.navigate(['/']);
    } else {
      // Handle invalid login
      this.error = 'Invalid username or password';
    }
  }
}
