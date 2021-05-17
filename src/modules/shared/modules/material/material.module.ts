import { MatInputModule }           from '@angular/material/input';
import { MatButtonModule }          from '@angular/material/button';
import { MatSidenavModule }         from '@angular/material/sidenav';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatGridListModule }        from '@angular/material/grid-list';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatProgressBarModule }     from '@angular/material/progress-bar';
import { MatDialogModule }          from '@angular/material/dialog'; //
import { MatAutocompleteModule }    from '@angular/material/autocomplete';
import { MatCardModule }            from '@angular/material/card';
import { MatIconModule }            from '@angular/material/icon';//
import { MatListModule }            from '@angular/material/list'; //
import { MatMenuModule }            from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; //
import { MatTabsModule }            from "@angular/material/tabs";
import { MatSliderModule }          from '@angular/material/slider';
import { MatSnackBarModule }        from '@angular/material/snack-bar';
import { MatTooltipModule }         from '@angular/material/tooltip';
import { MatTableModule }           from "@angular/material/table";
import { MatPaginatorModule }       from "@angular/material/paginator";
import { MatSortModule }            from "@angular/material/sort";
import { MatOptionModule }          from "@angular/material/core";
import { MatSelectModule }          from "@angular/material/select";

import { FlexLayoutModule } from '@angular/flex-layout';


import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule, //5
    MatProgressBarModule,
    // MatMenuModule,
    MatIconModule,
    MatCardModule,
    // MatSliderModule,
    // MatAutocompleteModule,
    // MatSnackBarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    // MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatOptionModule,
    MatSelectModule,

    FlexLayoutModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule, //5
    MatProgressBarModule,
    // MatMenuModule,
    MatIconModule,
    MatCardModule,
    // MatSliderModule,
    // MatAutocompleteModule,
    // MatSnackBarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    // MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatOptionModule,
    MatSelectModule,

    FlexLayoutModule
  ]
})

export class MaterialModule
{
}
