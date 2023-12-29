import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
  styleUrls: ['./up-coming.component.css']
})
export class UpComingComponent {
  movies :any
  constructor(private movieSservice:MovieService, public loginService: LoginService){
    this.movieSservice.getUpComing().subscribe(
      (res)=>{
        console.log(res);
       this.movies=res.results 
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }
}
