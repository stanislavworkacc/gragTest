import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

declare var gtag

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-gtag-test';

  constructor(
    router: Router,
  ) {
    const navEndEvent = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )

    navEndEvent.subscribe((event: NavigationEnd) => {
      console.log('YESY')
      gtag('config', 'G-Y50J4MYZ57', {'page_path':event.urlAfterRedirects});
    })
  }
}
