import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { ResumeComponent } from '../resume/resume.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'gigih-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.css']
})
export class MyCvComponent implements OnInit {
  mediaSub: Subscription;
  deviceXs: boolean;
  deviceMd: boolean;
  deviceSm: boolean;
  deviceLg: boolean;
  constructor(
    public mediaObs: MediaObserver,
    public dialog: MatDialog
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

  viewResume(){
    const dialogRef = this.dialog.open(ResumeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  downloadCv(){
    window.open('https://gigihsantoso.id/file/resume-gigih.docx', "_blank");
  }

}
