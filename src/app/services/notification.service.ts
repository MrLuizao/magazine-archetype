/**
 * Notification Services
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  getNotifications() {
    return [
      {
        title: "Various versions have evolved over the years",
        message: "he rejects pleasures to secure other greater pleasures.",
        date: "13/20",
        status: false,
      },
      {
        title: "Various versions have evolved over the years",
        message: "he rejects pleasures to secure other greater pleasures.",
        date: "13/20",
        status: false
      },
      {
        title: "Various versions have evolved over the years",
        message: "he rejects pleasures to secure other greater pleasures.",
        date: "13/20",
        status: true
      },
      {
        title: "Various versions have evolved over the years",
        message: "he rejects pleasures to secure other greater pleasures.",
        date: "13/20",
        status: true
      },
      {
        title: "Various versions have evolved over the years",
        message: "he rejects pleasures to secure other greater pleasures.",
        date: "13/20",
        status: false
      },
      {
        title: "Various versions have evolved over the years",
        message: "he rejects pleasures to secure other greater pleasures.",
        date: "13/20",
        status: true
      },
      {
        title: "Various versions have evolved over the years",
        message: "he rejects pleasures to secure other greater pleasures.",
        date: "13/20",
        status: false
      },
      {
        title: "Various versions have evolved over the years",
        message: "he rejects pleasures to secure other greater pleasures.",
        date: "13/20",
        status: true
      },
      {
        title: "Various versions have evolved over the years",
        message: "he rejects pleasures to secure other greater pleasures.",
        date: "13/20",
        status: true
      }
    ]
  }
}
