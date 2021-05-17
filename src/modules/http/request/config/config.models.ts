import { environment } from "@/environments/environment";

import { ApiRoutesConfig } from "@/config/api-routes.config";

export class Config
{
  public api: boolean = environment.config.api;
  public url: {
    api: string,
    base: string,
  };

  constructor() {
    this.url = {
      base: environment.config.url, api: environment.config.api_url
    }
  }
}
