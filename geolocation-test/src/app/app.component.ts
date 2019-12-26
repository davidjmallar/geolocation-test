import { Component } from '@angular/core';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Accuracy: {{accuracy | number : '.2-2'}}m
      </h1>
    </div>
  `,
  styles: []
})
export class AppComponent {
  accuracy = -1;
  constructor(locationService: LocationService) {
    locationService.onChange.asObservable().subscribe(p => this.accuracy = p.coords.accuracy);
  }
}
