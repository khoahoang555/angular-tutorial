import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

function skuValidator(control: AbstractControl): { [s: string]: boolean } | null {
  if (!control.value.match(/^123/)) {
    return {'invalidSku': true};
  }

  return null;
}

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.component.html',
  styleUrls: ['./demo-form-with-custom-validation.component.css']
})
export class DemoFormWithCustomValidationComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator
      ])]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    if (this.myForm.invalid) {
      this.myForm.markAsTouched({onlySelf: true});
      Object.keys(this.myForm.controls).forEach(field => {
        const control = this.myForm.get(field);
        console.log(control);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
    console.log('You submitted value: ' + value);
  }


}
