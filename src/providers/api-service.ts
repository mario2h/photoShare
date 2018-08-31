import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ConfigService } from '../config/config-service';
import { Http, Response } from '@angular/http';

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiService {

  private readonly host: string = ConfigService.hostUrl;  // URL to web api

  constructor(public http: Http) {
    console.log('Hello ApiService Provider');
  }

  getInstagramUserInfo(accessToken) {
    return this.http.get(this.host + 'users/self/?access_token=' + accessToken)
    .map((res:Response) => res.json());
  }
}
