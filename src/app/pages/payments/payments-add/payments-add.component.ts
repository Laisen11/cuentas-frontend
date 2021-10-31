import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/services/api.service';
import {Invoice, Payment} from '../../../shared/models/responses';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

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
        private location: Location,
        private snackBar: MatSnackBar
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

        this.apiService.getInvoices(payment.idInvoice).subscribe(value => {
            if (value != null && value.payments) {
                const totalPayments = value.payments.reduce((sum, current) => sum + current.amount, 0)
                const total = value.total - totalPayments;

                console.log('Class: totalPayments', totalPayments);
                console.log('Class: total', total);

                if (total >= payment.amount) {
                    this.apiService.postPayment(payment).subscribe((value2) => {
                        if (value2) {
                            this.location.back()
                        }
                    });
                } else {
                    this.snackBar.open('The total is bigger that total invoice', null, {duration: 3000});
                }
            }
        });
    }
}
