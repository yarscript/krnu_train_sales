import { Injectable } from '@angular/core';

import { environment } from '@/environments/environment';
import { Config }      from './config.models';

@Injectable()
export class ConfigService
{
  protected config: Config = new Config();

  constructor() {
  }

  getConfig(): Config {
    return this.config;
  }
}

