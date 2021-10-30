import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/services/api.service';
import {Location} from '@angular/common';
import {Supplier} from '../../../shared/models/responses';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-providers-edit',
    templateUrl: './providers-edit.component.html',
    styleUrls: ['./providers-edit.component.scss']
})
export class ProvidersEditComponent implements OnInit {
    public form: FormGroup;
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
            this.load();
        });
    }

    submit() {
        const supplier = {} as Supplier;

        supplier.id = this.id;
        supplier.name = this.form.value['name'];
        supplier.nit = this.form.value['nit'];

        this.apiService.updateProviders(this.id, supplier).subscribe((value) => {
            this.location.back()
        });
    }

    private load() {
        this.apiService.getProviders(this.id).subscribe(value => {
            this.form = this.formBuilder.group({
                name: [value.name, Validators.required],
                nit: [value.nit, Validators.required],
            });
        });
    }
}
