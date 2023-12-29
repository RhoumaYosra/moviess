import { Component } from '@angular/core';
import { TVService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.css']
})
export class PopularTvComponent {
  tvs :any
  constructor(private tvservice:TVService){
    this.tvservice.getPopulartv().subscribe(
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
