import {Routes} from '@angular/router';
import {ProvidersListComponent} from '../../pages/providers/providers-list/providers-list.component';
import {ProvidersAddComponent} from '../../pages/providers/providers-add/providers-add.component';
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

export const AdminLayoutRoutes: Routes = [
    {
        path: 'providers',
        component: ProvidersListComponent
    },
    {
        path: 'providers/add',
        component: ProvidersAddComponent
    },
    {
        path: 'providers/:id',
        component: ProvidersEditComponent
    },

    {
        path: 'invoices',
        component: InvoicesListComponent
    },
    {
        path: 'invoices/add',
        component: InvoicesAddComponent
    },
    {
        path: 'invoices/:id',
        component: InvoicesEditComponent
    },

    {
        path: 'payments',
        component: PaymentsListComponent
    },
    {
        path: 'payments/add',
        component: PaymentsAddComponent
    },
    {
        path: 'payments/:id',
        component: PaymentsEditComponent
    },

    {
        path: 'balance',
        component: BalanceComponent
    },
    {
        path: 'accounts',
        component: ProvidersComponent
    },
    {
        path: 'accounts/detail/:id',
        component: InvoicesComponent
    },
    {
        path: 'accounts/detail/payments/:id',
        component: PaymentsComponent
    },
];
