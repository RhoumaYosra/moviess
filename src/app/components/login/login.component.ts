import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;
  requestToken: any;
  
  error: string | undefined;

  
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
  
    this.error = undefined;

    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      this.loginService.getRequestToken().subscribe(
        (response) => {
          this.requestToken = response.request_token;

          this.loginService.login(username, password, response.request_token).subscribe(
            (loginResponse) => {
              console.log('SUCCESS', loginResponse);
              sessionStorage.setItem('login',JSON.stringify(loginResponse))
            
            
              this.loginService.setLoginStatus(true); // Set login status to true upon successful login

              // After successful login
  this.loginService.createSession(this.requestToken).subscribe(
  (sessionResponse) => {
    console.log('Session Created:', sessionResponse);

    // Store session details if needed
    sessionStorage.setItem('session', JSON.stringify(sessionResponse));

    // Now fetch account information using the created session
    this.loginService.getAccountInfo(sessionResponse.session_id).subscribe(
      (accountInfo) => {
        console.log('Account Information:', accountInfo);

        // Handle account information as needed
        sessionStorage.setItem('account', JSON.stringify(accountInfo));
        this.loginService.username=accountInfo.username
       
        // Example: Navigating to a different page after fetching account info
        this.router.navigate(['/films']);
      },
      (error) => {
        console.error('Failed to fetch account information:', error);
        // Handle error fetching account info
      }
    );
  },
  (error) => {
    console.error('Failed to create session:', error);
    // Handle error creating session
  }
);

             
            },
            (error) => {
              console.error('ERROR', error);
             
              this.error = 'Login failed. Please check your credentials.';
            }
          );
        },
        (error) => {
          console.error(error);
        
          this.error = 'Failed to obtain request token.';
        }
      );
    } else {
    
      this.error = 'Please enter both username and password.';
    }
  }
}