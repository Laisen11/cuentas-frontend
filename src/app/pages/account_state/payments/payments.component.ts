import {Component, OnInit} from '@angular/core';
import {Invoice, Payment} from '../../../shared/models/responses';
import {ApiService} from '../../../shared/services/api.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
    public invoice: Invoice;
    public payments: Payment[];
    public total = 0;
    private id: number;

    constructor(
        private apiService: ApiService,
        private location: Location,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.apiService.getInvoices(this.id).subscribe(value => {
                this.invoice = value;
                this.payments = value.payments;
                this.getTotal();
            });
        });
    }

    getTotal() {
        if (this.payments) {
            this.total = this.payments.reduce((sum, current) => sum + current.amount, 0)
        }
    }

    getBalance() {
        return this.invoice.total - this.total;
    }
}
