import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-demo-form-sku-builder',
    templateUrl: './demo-form-sku-builder.component.html'
}) 
export class DemoSkuFormBuilderComponent {
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['', Validators.required]
        })
    }

    onSubmit(value: string) {
        console.log(value);
    }
}