import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/services/api.service';
import {Location} from '@angular/common';
import {Invoice, Supplier} from '../../../shared/models/responses';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-invoices-edit',
    templateUrl: './invoices-edit.component.html',
    styleUrls: ['./invoices-edit.component.scss']
})
export class InvoicesEditComponent implements OnInit {
    public form: FormGroup;
    public providers: Supplier[] = [];
    private id: number;

    constructor(
        private formBuilder: FormBuilder,
        private apiService: ApiService,
        private location: Location,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.apiService.fetchProviders().subscribe(value => {
                this.providers = value;

                this.load();
            });
        });
    }

    submit() {
        const invoice = {} as Invoice;

        invoice.id = this.id;
        invoice.createDate = this.form.value['createDate'];
        invoice.total = this.form.value['total'];
        invoice.pending = this.form.value['pending'];
        invoice.idProvider = this.form.value['idProvider'];

        this.apiService.updateInvoices(this.id, invoice).subscribe((value) => {
            this.location.back()
        });
    }

    private load() {
        this.apiService.getInvoices(this.id).subscribe(value => {
            this.form = this.formBuilder.group({
                createDate: [value.createDate, Validators.required],
                total: [value.total, Validators.required],
                pending: [value.pending, Validators.required],
                idProvider: [value.idProvider, Validators.required],
            });
        });
    }
}
