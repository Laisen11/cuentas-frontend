import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {ProvidersListComponent} from '../../pages/providers/providers-list/providers-list.component';
import {ProvidersAddComponent} from '../../pages/providers/providers-add/providers-add.component';
import {MatIconModule} from '@angular/material/icon';
import {ProvidersEditComponent} from '../../pages/providers/providers-edit/providers-edit.component';
import {InvoicesListComponent} from '../../pages/invoices/invoices-list/invoices-list.component';
import {InvoicesAddComponent} from '../../pages/invoices/invoices-add/invoices-add.component';
import {InvoicesEditComponent} from '../../pages/invoices/invoices-edit/invoices-edit.component';
import {PaymentsListComponent} from '../../pages/payments/payments-list/payments-list.component';
import {PaymentsAddComponent} from '../../pages/payments/payments-add/payments-add.component';
import {PaymentsEditComponent} from '../../pages/payments/payments-edit/payments-edit.component';
import {ProvidersComponent} from '../../pages/account_state/providers/providers.component';
import {InvoicesComponent} from '../../pages/account_state/invoices/invoices.component';
import {PaymentsComponent} from '../../pages/account_state/payments/payments.component';
import {BalanceComponent} from '../../pages/balance/balance.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatIconModule,
    ],
    declarations: [
        ProvidersListComponent,
        ProvidersAddComponent,
        ProvidersEditComponent,
        InvoicesListComponent,
        InvoicesAddComponent,
        InvoicesEditComponent,
        PaymentsListComponent,
        PaymentsAddComponent,
        PaymentsEditComponent,
        ProvidersComponent,
        InvoicesComponent,
        PaymentsComponent,
        BalanceComponent,
    ]
})

export class AdminLayoutModule {
}
