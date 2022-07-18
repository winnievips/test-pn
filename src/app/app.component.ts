import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HmspushService } from './services/hmspush.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private hmsPushService: HmspushService
  ) {
    this.platform.ready().then(() => this.hmsPushService.registerPN());
  }
}
