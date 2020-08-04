import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'gigih-point-of-sales',
  templateUrl: './point-of-sales.component.html',
  styleUrls: ['./point-of-sales.component.css']
})
export class PointOfSalesComponent implements OnInit {
  mediaSub: Subscription;
  deviceXs: boolean;
  deviceMd: boolean;
  deviceSm: boolean;
  deviceLg: boolean;
  constructor(
    public mediaObs: MediaObserver
  ) { }

  ngOnInit(): void {
    this.media();
  }

  media(){
    this.mediaSub = this.mediaObs.media$.subscribe((res: MediaChange)=> {
      this.deviceLg = res.mqAlias === 'lg' ? true : false;
      this.deviceXs = res.mqAlias === 'xs' ? true : false;
      this.deviceMd = res.mqAlias === 'md' ? true : false;
      this.deviceSm = res.mqAlias === 'sm' ? true : false;
      return (this.deviceMd, this.deviceSm, this.deviceXs, this.deviceLg)
    })
  }

  goToSourceCodeFrontEnd(){
    window.open('https://github.com/iongie/pos-rev-revision.git', '_blank');
  }

  goToSourceCodeBackEnd(){
    window.open('https://github.com/iongie/POS-REV-API.git', '_blank');
  }
}
