import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class AlertService {

  constructor(private alertController: AlertController) { }

    presentConfirm(titulo: string = '', msg: string = '', callback: () => void = function () {}) {
        let alert = this.alertController.create({
            title: titulo,
            message: msg,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => { }
                },
                {
                    text: 'Aceptar',
                    handler: () => {
                        let navTransition = alert.dismiss();
                        navTransition.then(() => {
                            callback();
                        });
                        return false;
                    }
                }
            ]
        });
        alert.present();
    }

    presentAlert(titulo: string = '', msg: string = '' ) {
        let alert = this.alertController.create({
            title: titulo,
            message: msg,
            buttons: [{
                text: 'Aceptar',
                handler: () => { }
            }]
        });
        alert.present();
    }
}
