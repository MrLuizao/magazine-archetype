/**
 * Storage Services
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const ITEMS_KEY = 'articles';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(article) {
    await Storage.get({ key: ITEMS_KEY }).then(async (articles: any) => {
      if (articles.value) {
        let newarticles: any = JSON.parse(articles.value);
        newarticles.push(article);
        await Storage.set({
          key: ITEMS_KEY,
          value: JSON.stringify(newarticles)
        });
      } else {
        await Storage.set({
          key: ITEMS_KEY,
          value: JSON.stringify([article])
        });
      }
    })
  }

  async getObject() {
    const ret = await Storage.get({ key: ITEMS_KEY });
    const articles = JSON.parse(ret.value);
    return articles;
  }

  async clear() {
    await Storage.clear();
  }
}

