import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterStateSerializer } from "@ngrx/router-store";

import { ConfigService }  from './request/config/config.service';
import { RequestService } from './request/request.service';

import { CustomSerializer } from "@/modules/http/router/custom-serializer";


export {
  ConfigService,
  RequestService
}

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [],
  providers: [
    ConfigService,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class HttpModule
{
}
