// app.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  route: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.route = this.activatedRoute.snapshot.data;
  }
}
