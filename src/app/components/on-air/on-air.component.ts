import { Component } from '@angular/core';
import { TVService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-on-air',
  templateUrl: './on-air.component.html',
  styleUrls: ['./on-air.component.css']
})
export class OnAirComponent {
  tvs :any
  constructor(private tvservice:TVService){
    this.tvservice.getOnAir().subscribe(
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
