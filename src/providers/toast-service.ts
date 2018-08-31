import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  presentToast(msg: string, position: string = 'top', duration: number = 5000, showCloseButton: boolean = false) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration,
      showCloseButton: showCloseButton,
      closeButtonText: 'Ok',
      position: position
    });
    toast.present();
  }


}
