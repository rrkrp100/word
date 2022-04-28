import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'word';
  appClasses='app';
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 1080px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.appClasses = 'app app-small-screen'
        } else {
          this.appClasses = 'app app-large-screen'
        }
      });
  }
}
