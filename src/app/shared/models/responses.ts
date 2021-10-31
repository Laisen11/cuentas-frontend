export interface Supplier {
    id: number;
    name: string;
    nit: string;
    invoices: Invoice[];
    payments: Payment[];
}

export interface Invoice {
    id: number;
    createDate: string;
    total: number;
    pending: number;
    idProvider: number;
    description: string;
    payments: Payment[];
}

export interface Payment {
    id: number;
    idInvoice: number;
    amount: number;
}
