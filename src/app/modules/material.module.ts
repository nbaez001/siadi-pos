import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatCardModule, MatGridListModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatExpansionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatTooltipModule, MatCheckboxModule, MatRadioModule, MatProgressSpinnerModule, MatBadgeModule, MatStepperModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ResponsiveRowsDirective } from '../core/directives/responsive-rows.directive';
import { UppercasedDirective } from '../core/directives/uppercased.directive';

@NgModule({
  declarations: [
    ResponsiveRowsDirective,
    UppercasedDirective, //DIRECTIVA UPPERCASE
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,

    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatStepperModule,
    MatSnackBarModule,
  ],
  exports: [
    ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatStepperModule,
    MatSnackBarModule,

    ResponsiveRowsDirective,
    UppercasedDirective, //DIRECTIVA UPPERCASE
  ]
})
export class MaterialModule { }
