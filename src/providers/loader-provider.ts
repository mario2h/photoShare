import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoaderProvider {

  private loading: any;

  constructor(public loadingCtrl: LoadingController) {
    this.init();
  }

  init(){
    const html = '';

    this.loading = this.loadingCtrl.create({
      content: 'cargando...'
    });
  }

  present() {
    this.loading.present();
  }

  dismiss(){
    this.loading.dismiss();
    this.init();
  }
}
