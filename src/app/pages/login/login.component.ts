import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private apiService: ApiService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    submit() {
        const email = this.form.value['email'];
        const password = this.form.value['password'];

        this.apiService.login(email, password).subscribe(value => {
            if (value) {
                this.apiService.saveSession();
                this.router.navigateByUrl('/providers');
            }
        });
    }
}
