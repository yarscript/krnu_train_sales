import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {
  StoragesPageComponent
}                                  from "@/modules/app/modules/storages/contatiners/storages-page.component";
import { CreateStoragePageComponent } from "@/modules/app/modules/storages/contatiners/create-storage-page.component";

const routes: Routes = [
  { path: '', component: StoragesPageComponent, data: { title: 'storages' } },
  { path: 'create', component: CreateStoragePageComponent, data: { title: 'Create Storages' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class StoragesRoutingModule
{
}
