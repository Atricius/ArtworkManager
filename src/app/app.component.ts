import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameInfoBrowser';
}
export class AppComponent {
  LoadedFeature = 'game-detail';

  onNavigate(feature: string) {
    this.LoadedFeature = feature;
  }
}
