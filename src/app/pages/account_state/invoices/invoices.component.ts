import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../shared/services/api.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Invoice} from '../../../shared/models/responses';

@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
    public invoices: Invoice[];
    public total = 0;
    private id: number;

    constructor(
        private apiService: ApiService,
        private location: Location,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.load();
        });
    }

    getTotal() {
        if (this.invoices) {
            this.total = this.invoices.reduce((sum, current) => sum + current.total, 0)
        }
    }

    private load() {
        this.apiService.getProviders(this.id).subscribe(value => {
            this.invoices = value.invoices;
            this.getTotal();
        });
    }
}
