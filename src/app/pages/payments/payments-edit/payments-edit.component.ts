import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/services/api.service';
import {Location} from '@angular/common';
import {Invoice, Payment} from '../../../shared/models/responses';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-payments-edit',
    templateUrl: './payments-edit.component.html',
    styleUrls: ['./payments-edit.component.scss']
})
export class PaymentsEditComponent implements OnInit {
    public form: FormGroup;
    public invoices: Invoice[] = [];
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
            this.apiService.fetchInvoices().subscribe(value => {
                this.invoices = value;

                this.load();
            });
        });
    }

    submit() {
        const payment = {} as Payment;

        payment.id = this.id;
        payment.amount = this.form.value['amount'];
        payment.idInvoice = this.form.value['idInvoice'];

        this.apiService.updatePayments(this.id, payment).subscribe((value) => {
            this.location.back()
        });
    }

    private load() {
        this.apiService.getPayments(this.id).subscribe(value => {
            this.form = this.formBuilder.group({
                amount: [value.amount, Validators.required],
                idInvoice: [value.idInvoice, Validators.required],
            });
        });
    }
}
