import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gigih-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadCv(){
    window.open('https://gigihsantoso.id/file/resume-gigih.docx', "_blank");
  }

}
