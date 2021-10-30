import {Component, OnInit} from '@angular/core';
import {Invoice, Supplier} from '../../shared/models/responses';
import {ApiService} from '../../shared/services/api.service';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
    public suppliers: Supplier[] = [];
    public invoices: Invoice[] = [];

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.load();
    }

    getTotal(invoices: Invoice[]): number {
        if (invoices) {
            return invoices.reduce((sum, current) => sum + current.total, 0)
        }

        return 0;
    }

    getTotalPayments(id: number): number {
        let total = 0;

        const aux = this.invoices.filter(value => value.idProvider === id);

        for (const i of aux) {
            total += i.payments.reduce((sum, current) => sum + current.amount, 0)
        }

        return total;
    }

    getBalance(invoices: Invoice[], id: number): number {
        return this.getTotal(invoices) - this.getTotalPayments(id);
    }

    private load() {
        this.apiService.fetchProviders().subscribe(async (value) => {
            this.suppliers = value;

            this.apiService.fetchInvoices().subscribe(value1 => {
                this.invoices = value1;
            })
        });
    }
}
