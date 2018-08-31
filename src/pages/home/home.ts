import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Instagram } from '@ionic-native/instagram';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ApiService } from '../../providers/api-service';
import { UserService } from '../../providers/user-service'; 
import { AlertService } from '../../providers/alert-service';
import { LoaderProvider } from '../../providers/loader-provider';
import { InstagramUserInfoResponseDto } from '../../dtos/response/instagramUserInfo.response';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  accessToken: string;
  userData: any;
  currentImage: any = null;

  constructor(public navCtrl: NavController, public apiService: ApiService, public userService: UserService, 
    private loaderProvider: LoaderProvider, private alertService: AlertService, private camera: Camera, private instagram: Instagram) {
    this.accessToken = this.userService.getUserToken();
    this.userData = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.loaderProvider.present();
    this.apiService.getInstagramUserInfo(this.accessToken).subscribe((response: InstagramUserInfoResponseDto) => {
      console.log(response);
      this.userData = response.data;
      this.loaderProvider.dismiss();
    }, (error) => {
      console.log(error);
      this.loaderProvider.dismiss();
      let msg = error._body ? JSON.parse(error._body) : error;
      this.alertService.presentAlert("¡Error!", msg.meta.error_message);
    });
  }

  loadImage() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((data) => {
      this.currentImage = 'data:image/jpeg;base64,' + data;
    });
  }

  shareImage() {
    if(this.instagram.isInstalled()) {
      this.instagram.share(this.currentImage).then(() => {

      });
    } else {
      this.alertService.presentAlert("¡Advertencia!", 
        'Es Necesario instalar Instagram en su teléfono al parecer no está instalado');
    }
  }

  userLogout() {
    this.alertService.presentConfirm('Cerrar Sesión', `${this.userData.username} ¿está seguro que quiere cerrar su sesión?`, () => {
      this.userService.cleanSesion();
      this.navCtrl.setRoot(LoginPage);
      console.log('logout app!');
    })
  }
}
