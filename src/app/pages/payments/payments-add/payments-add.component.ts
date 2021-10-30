import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/services/api.service';
import {Invoice, Payment} from '../../../shared/models/responses';
import {Location} from '@angular/common';

@Component({
    selector: 'app-payments-add',
    templateUrl: './payments-add.component.html',
    styleUrls: ['./payments-add.component.scss']
})
export class PaymentsAddComponent implements OnInit {
    public form: FormGroup;
    public invoices: Invoice[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private apiService: ApiService,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.apiService.fetchInvoices().subscribe(value => {
            this.invoices = value;

            this.form = this.formBuilder.group({
                id: ['', Validators.required],
                idInvoice: ['', Validators.required],
                amount: ['', Validators.required],
            });
        });
    }

    submit() {
        const payment = {} as Payment;

        payment.idInvoice = this.form.value['idInvoice'];
        payment.amount = this.form.value['amount'];

        this.apiService.postPayment(payment).subscribe((value) => {
            if (value) {
                this.location.back()
            }
        });
    }
}
