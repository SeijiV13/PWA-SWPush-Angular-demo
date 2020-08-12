import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { WebNotificationService } from './../services/web-notification.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  isEnabled = this.swPush.isEnabled;
  isGranted = Notification.permission === 'granted';
constructor(private swPush: SwPush,
            private webNotificationService: WebNotificationService) {}
submitNotification(): void {
    this.webNotificationService.subscribeToNotification();
  }
}
