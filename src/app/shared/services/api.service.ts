import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Invoice, Payment, Supplier} from '../models/responses';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private BASE_URL = 'https://cuentasporpagarapi.azurewebsites.net/api';

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string): Observable<boolean> {
        return this.http.post<boolean>(`${this.BASE_URL}/Auth`, {email, password});
    }

    fetchProviders(): Observable<Supplier[]> {
        return this.http.get<Supplier[]>(`${this.BASE_URL}/providers`);
    }

    postProvider(supplier: Supplier): Observable<Supplier> {
        return this.http.post<Supplier>(`${this.BASE_URL}/providers`, supplier);
    }

    deleteProvider(id: number): Observable<any> {
        return this.http.delete(`${this.BASE_URL}/providers/${id}`);
    }

    getProviders(id: number): Observable<Supplier> {
        return this.http.get<Supplier>(`${this.BASE_URL}/providers/${id}`);
    }

    updateProviders(id: number, supplier: Supplier): Observable<any> {
        return this.http.put(`${this.BASE_URL}/providers/${id}`, supplier);
    }

    fetchInvoices(): Observable<Invoice[]> {
        return this.http.get<Invoice[]>(`${this.BASE_URL}/invoices`);
    }

    postInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(`${this.BASE_URL}/invoices`, invoice);
    }

    deleteInvoice(id: number): Observable<any> {
        return this.http.delete(`${this.BASE_URL}/invoices/${id}`);
    }

    getInvoices(id: number): Observable<Invoice> {
        return this.http.get<Invoice>(`${this.BASE_URL}/invoices/${id}`);
    }

    updateInvoices(id: number, invoice: Invoice): Observable<any> {
        return this.http.put(`${this.BASE_URL}/invoices/${id}`, invoice);
    }

    fetchPayments(): Observable<Payment[]> {
        return this.http.get<Payment[]>(`${this.BASE_URL}/payments`);
    }

    postPayment(payment: Payment): Observable<Payment> {
        return this.http.post<Payment>(`${this.BASE_URL}/payments`, payment);
    }

    deletePayment(id: number): Observable<any> {
        return this.http.delete(`${this.BASE_URL}/payments/${id}`);
    }

    getPayments(id: number): Observable<Payment> {
        return this.http.get<Payment>(`${this.BASE_URL}/payments/${id}`);
    }

    updatePayments(id: number, payment: Payment): Observable<any> {
        return this.http.put(`${this.BASE_URL}/payments/${id}`, payment);
    }

    isLogin(): boolean {
        return localStorage.getItem('login') !== null;
    }

    logout() {
        localStorage.clear();
    }

    saveSession() {
        localStorage.setItem('login', '');
    }
}
