import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  // Aqui deben ir centralizadas las variables globales del app tipo url base de los WS
  static readonly hostUrl: string = "https://api.instagram.com/v1/";
}
