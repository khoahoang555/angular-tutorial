import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DemoSkuFormComponent } from 'src/demo-form-sku/demo-form-sku.component';

import { AppComponent } from './app.component';
import { DemoSkuFormBuilderComponent } from './demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormWithCustomValidationComponent } from './demo-form-with-custom-validation/demo-form-with-custom-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoSkuFormComponent,
    DemoSkuFormBuilderComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormWithCustomValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
