import { Injectable } from '@angular/core';
import { HmsPush, HmsPushEvent } from '@hmscore/ionic-native-hms-push/ngx';

@Injectable({
  providedIn: 'root'
})
export class HmspushService {

  constructor(
    private hmsPush: HmsPush,
    private hmsPushEvent: HmsPushEvent
  ) {
    this.hmsPush.init();
    this.initiateListener();
  }

  registerPN() {
    this.hmsPush.getToken()
      .then((result) => {
        console.log('registerPN.getToken', result);
      }).catch(e => {
        console.log('registerPN.getToken ERROR', e);
      });
  }

  private initiateListener() {
    try {
      this.hmsPushEvent.onRemoteMessageReceived((result) => {
        console.log('REMOTE_DATA_MESSAGE_RECEIVED', JSON.stringify(result));
      });

      this.hmsPushEvent.onTokenReceived((result) => {
        console.log('TOKEN_RECEIVED_EVENT', result.token);
      });

      this.hmsPushEvent.onTokenError((result) => {
        console.log('ON_TOKEN_ERROR_EVENT', result.exception);
      });

      this.hmsPushEvent.onNotificationOpenedApp((result) => {
        console.log('NOTIFICATION_OPENED_EVENT', result);
      });
    } catch(e) {
      console.log('initiateListener ERROR', e);
    }


    this.hmsPush
      .getInitialNotification()
      .then((result: any) => {
        console.log('getInitialNotification', result);
      })
      .catch((e: any) => {
        console.log('getInitialNotification ERROR', e);
      });
  }
}
