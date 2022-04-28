/**
 * Global Services
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public alertController: AlertController) { }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
