import { Component } from "@angular/core";

@Component({
    selector: 'app-demo-form-sku',
    templateUrl: './demo-form-sku.component.html'
}) 
export class DemoSkuFormComponent {

    constructor() {

    }

    onSubmit(form: any) {
        console.log(form);
    }
}