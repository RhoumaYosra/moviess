import { Component } from '@angular/core';
import { TVService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-toprated-tv',
  templateUrl: './toprated-tv.component.html',
  styleUrls: ['./toprated-tv.component.css']
})
export class TopratedTvComponent {
  tvs :any
  constructor(private tvservice:TVService){
    this.tvservice.getTopRated().subscribe(
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
