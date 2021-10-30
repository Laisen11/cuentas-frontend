import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/providers', title: 'Providers', icon: 'person', class: ''},
    {path: '/invoices', title: 'Invoices', icon: 'receipt', class: ''},
    {path: '/payments', title: 'Payments', icon: 'payments', class: ''},
    {path: '/balance', title: 'Balance', icon: 'balance', class: ''},
    {path: '/accounts', title: 'Accounts state', icon: 'bar_chart', class: ''},
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(
        private apiService: ApiService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        return $(window).width() <= 991;
    };

    logout() {
        this.apiService.logout();
        this.router.navigateByUrl('/login');
    }
}
