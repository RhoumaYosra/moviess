import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
search=''
constructor(public loginService: LoginService, private router: Router){

}

  ngOnInit(): void {
    if (sessionStorage.getItem("account") && sessionStorage.getItem("login") && sessionStorage.getItem("session")) {
      this.loginService.isLogged=true
    }
  }

    

   




logout() {
  const sessionData = JSON.parse(sessionStorage.getItem('session')!);
  if (sessionData && sessionData.session_id) {
    const sessionId = sessionData.session_id;
    sessionStorage.clear()

    this.loginService.logout(sessionId).subscribe(
      (response) => {
        console.log('Logout successful:', response);
  
        this.loginService.setLoginStatus(false);
        sessionStorage.clear()
        this.loginService.username=""

        this.router.navigate(['']);

        
      },
      (error) => {
        console.error('Logout failed:', error);
        // Handle logout failure if needed
      }
    );
  } else {
    console.error('Invalid session data');
  }
}




isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }




  isSearchOpen: boolean = false;

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }



  toggleSearchInput(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }
}
