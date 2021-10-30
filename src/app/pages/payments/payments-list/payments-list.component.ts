import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../shared/services/api.service';
import {Payment} from '../../../shared/models/responses';

@Component({
    selector: 'app-payments-list',
    templateUrl: './payments-list.component.html',
    styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {
    public payments: Payment[] = [];

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.load();
    }

    delete(id: number) {
        this.apiService.deletePayment(id).subscribe((value) => {
            this.load();
        });
    }

    private load() {
        this.apiService.fetchPayments().subscribe((value) => {
            this.payments = value;
        });
    }
}
