import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { WebNotificationService } from './../services/web-notification.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styles: ['./notification.component.css']
})
export class NotificationComponent {
  isEnabled = this.swPush.isEnabled;
  isGranted = Notification.permission === 'granted';
constructor(private swPush: SwPush,
            private webNotificationService: WebNotificationService) {}
submitNotification(): void {
    this.webNotificationService.subscribeToNotification();
  }
}
