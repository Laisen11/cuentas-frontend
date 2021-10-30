import {Component, OnInit} from '@angular/core';
import {Invoice, Supplier} from '../../../shared/models/responses';
import {ApiService} from '../../../shared/services/api.service';

@Component({
    selector: 'app-providers',
    templateUrl: './providers.component.html',
    styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

    public suppliers: Supplier[] = [];

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.load();
    }

    delete(id: number) {
        this.apiService.deleteProvider(id).subscribe((value) => {
            this.load();
        });
    }

    getTotal(invoices: Invoice[]) {
        if (invoices) {
            return invoices.reduce((sum, current) => sum + current.total, 0)
        }

        return 0;
    }

    private load() {
        this.apiService.fetchProviders().subscribe((value) => {
            this.suppliers = value;
        });
    }
}
