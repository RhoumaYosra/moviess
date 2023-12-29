import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private movieService: MovieService, public loginService:LoginService) { }
  movies:any
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
    
      this.movieService.searchMovies(params['search']).subscribe((data) => {
        this.movies = data.results;
        console.log(data);
        
      });
    })
  }
}