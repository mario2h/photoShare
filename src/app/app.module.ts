import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {XHRBackend, RequestOptions, HttpModule} from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

// Páginas
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

// Ionic Native
import { IonicStorageModule } from '@ionic/storage';
import { Instagram } from '@ionic-native/instagram';
import { Camera } from '@ionic-native/camera';

// Providers
import { LoaderProvider } from '../providers/loader-provider';
import { UserService } from "../providers/user-service";
import { ApiService } from "../providers/api-service";
import { ToastService } from "../providers/toast-service";
import { AlertService } from "../providers/alert-service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    ToastService,
    AlertService,
    UserService,
    LoaderProvider,
    Instagram,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}