import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {
  DocumentsPageComponent
}                                  from "@/modules/app/modules/documents/contatiners/documents-page.component";
import { CreateDocumentPageComponent } from "@/modules/app/modules/documents/contatiners/create-document-page.component";

const routes: Routes = [
  { path: '', component: DocumentsPageComponent, data: { title: 'documents' } },
  { path: 'create', component: CreateDocumentPageComponent, data: { title: 'Create Documents' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DocumentsRoutingModule
{
}
