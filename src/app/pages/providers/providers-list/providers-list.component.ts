import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../shared/services/api.service';
import {Supplier} from '../../../shared/models/responses';

@Component({
    selector: 'app-providers-list',
    templateUrl: './providers-list.component.html',
    styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {
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

    private load() {
        this.apiService.fetchProviders().subscribe((value) => {
            this.suppliers = value;
        });
    }
}
