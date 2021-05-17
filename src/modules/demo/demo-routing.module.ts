import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { DemoComponent }        from "@/modules/demo/components/demo";
const routes: Routes = [
  { path: '', component: DemoComponent, data: { title: 'Demo' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule { }
