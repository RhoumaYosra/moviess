import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  movies :any
  constructor(private movieSservice:MovieService, public loginService: LoginService){
    this.movieSservice.getTopRated().subscribe(
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
