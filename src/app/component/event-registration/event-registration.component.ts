import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'gigih-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {
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
  
  goToSourceCode() {
    window.open('https://github.com/iongie/lievee-two.git', "_blank");
  }

  goToAngularLink() {
    window.open('https://angular.io/', "_blank");
  }

  goToAkveoAdminLink() {
    window.open('https://akveo.github.io/ngx-admin/', "_blank");
  }
  

  goToBootsrapLink() {
    window.open('https://getbootstrap.com/', "_blank");
  }

}
