import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const CORE_MODULES: any[] = [CommonModule, FormsModule, ReactiveFormsModule, RouterModule];

@NgModule({
    providers: [],
    imports: [...CORE_MODULES],
    exports: [...CORE_MODULES]
  })
  export class SharedModule { }