import { Component, VERSION } from '@angular/core';
import { ThemeService } from './service/teameService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isNewProfile;
  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : null;
  }

  constructor(private themeService: ThemeService) {}
}
