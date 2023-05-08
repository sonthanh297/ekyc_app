import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { BaseDropdownComponent } from './components/base-drop-down/base-drop-down.component';


@NgModule({
  declarations: [
    AlertComponent,
    NotFoundComponent,
    BaseDropdownComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
