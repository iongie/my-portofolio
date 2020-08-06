import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private gtmService: GoogleTagManagerService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
          const gtmTag = {
              event: 'page',
              pageName: item.url
          };

          this.gtmService.pushTag(gtmTag);
      }
  });
  }

}
