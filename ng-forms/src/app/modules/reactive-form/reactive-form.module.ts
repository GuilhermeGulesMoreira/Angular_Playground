import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './components/reactive-form.component';

import { DebugFormModule } from '@modules/shared/debug-form/debug-form.module';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
    DebugFormModule,
    FormsModule,
  ],
})
export class ReactiveFormModule {}
