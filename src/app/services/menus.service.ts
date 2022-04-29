/**
 * Menu Service
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }

  getPages() {
    return [
      {
        title: 'Home',
        url: '/tabs/tab1-home',
        icon: 'home'
      },
      {
        title: 'Search',
        url: '/tabs/tab2-search',
        icon: 'search'
      },
      {
        title: 'Saved Articles',
        url: '/tabs/tab3-save',
        icon: 'bookmark'
      },
      {
        title: 'Settings',
        url: '/tabs/tab4-settings',
        icon: 'settings'
      },
      {
        title: 'Notification',
        url: '/tabs/notification',
        icon: 'notifications'
      },
      {
        title: 'Magazine',
        url: '/tabs/categories',
        // icon: 'reorder-four'
        icon: 'tablet-portrait'
      },
      {
        title: 'login',
        url: '/login',
        icon: 'lock-closed-outline'
      },
      {
        title: 'registration',
        url: '/registration',
        icon: 'lock-open-outline'
      },
      {
        title: 'Forget Password',
        url: '/forget-password',
        icon: 'disc-outline'
      },
      // {
      //   title: 'landing',
      //   url: '/landing',
      //   icon: 'tablet-portrait'
      // },
    ];
  }
}
