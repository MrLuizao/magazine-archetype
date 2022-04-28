/**
 * Notifications Screen Page Component
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  notifications: any = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.getNotification();
  }

  // Get list of notification
  getNotification() {
    this.notifications = this.notificationService.getNotifications();
  }
}
