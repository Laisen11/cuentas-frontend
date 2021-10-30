import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../shared/services/api.service';
import {Invoice} from '../../../shared/models/responses';

@Component({
    selector: 'app-invoices-list',
    templateUrl: './invoices-list.component.html',
    styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
    public invoices: Invoice[] = [];

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.load();
    }

    delete(id: number) {
        this.apiService.deleteInvoice(id).subscribe((value) => {
            this.load();
        });
    }

    private load() {
        this.apiService.fetchInvoices().subscribe((value) => {
            this.invoices = value;
        });
    }
}
