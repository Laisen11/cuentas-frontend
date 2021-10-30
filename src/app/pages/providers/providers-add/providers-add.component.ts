import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/services/api.service';
import {Supplier} from '../../../shared/models/responses';
import {Location} from '@angular/common';

@Component({
    selector: 'app-providers-add',
    templateUrl: './providers-add.component.html',
    styleUrls: ['./providers-add.component.scss']
})
export class ProvidersAddComponent implements OnInit {
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private apiService: ApiService,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            nit: ['', Validators.required],
        });
    }

    submit() {
        const supplier = {} as Supplier;

        supplier.name = this.form.value['name'];
        supplier.nit = this.form.value['nit'];

        this.apiService.postProvider(supplier).subscribe((value) => {
            if (value) {
                this.location.back()
            }
        });
    }
}
