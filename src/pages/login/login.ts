import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';
import { Instagram } from "ng2-cordova-oauth/core"; 
import { ApiService } from "../../providers/api-service";
import { UserService } from '../../providers/user-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private oauth: OauthCordova = new OauthCordova();

  private instagramProvider: Instagram = new Instagram({
      clientId: "1d0324490f42427d92950e69d2c8b837",
      redirectUri: 'http://localhost',
      responseType: 'token',
      appScope: ['basic','public_content'] 
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: ApiService, public userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  loginWithInstagram() {
    console.log('click!');
    this.oauth.logInVia(this.instagramProvider).then((response: any) => {
      console.log(response);
      this.userService.setUserToken(response.access_token);
      this.userService.persistUser();
      this.navCtrl.setRoot(HomePage);
    }, (error) => {
      console.log(error);
    });
  }

}
