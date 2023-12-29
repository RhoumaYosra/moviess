import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent {
  movies :any
constructor(private movieSservice:MovieService, public loginService: LoginService){
  this.movieSservice.getNow().subscribe(
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