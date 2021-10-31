import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/services/api.service';
import {Invoice, Supplier} from '../../../shared/models/responses';
import {Location} from '@angular/common';

@Component({
    selector: 'app-invoices-add',
    templateUrl: './invoices-add.component.html',
    styleUrls: ['./invoices-add.component.scss']
})
export class InvoicesAddComponent implements OnInit {
    public form: FormGroup;
    public providers: Supplier[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private apiService: ApiService,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.apiService.fetchProviders().subscribe(value => {
            this.providers = value;

            this.form = this.formBuilder.group({
                createDate: ['', Validators.required],
                total: ['', Validators.required],
                pending: ['', Validators.required],
                idProvider: ['', Validators.required],
                description: ['', Validators.required],
            });
        });
    }

    submit() {
        const invoice = {} as Invoice;

        invoice.createDate = this.form.value['createDate'];
        invoice.total = this.form.value['total'];
        invoice.pending = this.form.value['pending'];
        invoice.idProvider = this.form.value['idProvider'];
        invoice.description = this.form.value['description'];

        this.apiService.postInvoice(invoice).subscribe((value) => {
            if (value) {
                this.location.back()
            }
        });
    }
}
