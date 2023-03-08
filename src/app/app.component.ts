import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-estate-webapp-root',
  template: ` <router-outlet />`,
  standalone: true,
  imports: [RouterOutlet],
})
export default class AppComponent {}
