import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  movies :any
constructor(private movieSservice:MovieService, public loginService: LoginService){
  this.movieSservice.getPopularMovies().subscribe(
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
