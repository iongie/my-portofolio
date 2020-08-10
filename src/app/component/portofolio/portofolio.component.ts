import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'gigih-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {
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

  goToSourceCodeFe() {
    window.open('https://github.com/iongie/my-portofolio.git', "_blank");
  }

  goToSourceCodeBe() {
    window.open('https://github.com/iongie/my-portofolio-server.git', "_blank");
  }

  goToSourceCodeBackEnd(){
    window.open('https://github.com/iongie/POS-REV-API.git', '_blank');
  }

  goToAngularLink() {
    window.open('https://angular.io/', "_blank");
  }

  goToAngularMaterialLink() {
    window.open('https://material.angular.io/', "_blank");
  }
  

  goToBootsrapLink() {
    window.open('https://getbootstrap.com/', "_blank");
  }

  goToNodeJsLink() {
    window.open('https://nodejs.org/', "_blank");
  }


  goToMysqlLink() {
    window.open('https://www.mysql.com/', "_blank");
  }
}
