import { Component } from '@angular/core';
import { TVService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-airing-tv',
  templateUrl: './airing-tv.component.html',
  styleUrls: ['./airing-tv.component.css']
})
export class AiringTvComponent {

  tvs :any
  constructor(private tvservice:TVService){
    this.tvservice.getAiring().subscribe(
      (res)=>{
        console.log(res);
       this.tvs=res.results 
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }
}
