﻿/// <reference path="../../../Northwind/Product/ProductDialog.ts" />

namespace GestionEquestre.BasicSamples {

    /**
     * This is our custom product dialog that uses a different product form
     * (LookupFilterByMultipleForm) with our special category editor.
     */
    @Serenity.Decorators.registerClass()
    export class LookupFilterByMultipleDialog extends Northwind.ProductDialog {

        protected getFormKey() { return LookupFilterByMultipleForm.formKey; }
    }
}